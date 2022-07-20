import React, {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
} from "react";
import { useRuxState } from "../../hooks/useRuxState";
import { validate } from "../../lib/validation";
import P from "../P/P";
import "./TextInput.scss";

export interface TextInputProps {
  placholder: string;
  onChange: (inputData: { isValid: boolean; value: null | string }) => void;
  typeWithValidation: "text" | "password" | "email";
}

const TextInput: React.FC<TextInputProps> = ({
  placholder,
  typeWithValidation,
  onChange,
}) => {
  const valid = useRuxState<{
    valid: boolean;
    message?: string;
  }>({
    valid: true,
  });
  const isFocus = useRuxState(false);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const validatonResult = validate(e.target.value, typeWithValidation);
    valid.set(validatonResult);
    onChange({ isValid: validatonResult.valid, value: e.target.value });
  };

  return (
    <div className="input-wrapper">
      <input
        onFocus={() => isFocus.set(true)}
        onBlur={() => isFocus.set(false)}
        type={typeWithValidation}
        placeholder={placholder}
        onChange={handleInputChange}
        className={!isFocus.get() && !valid.get().valid ? "not-valid" : ""}
      ></input>
      <br />
      {!isFocus.get() && !valid.get().valid && valid.get().message && (
        <span className="not-valid-span">{valid.get().message}</span>
      )}
    </div>
  );
};

TextInput.defaultProps = {
  placholder: "e.g. John Doe",
  typeWithValidation: "text",
};

export default TextInput;
