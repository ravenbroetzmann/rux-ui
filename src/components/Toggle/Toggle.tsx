import React, { ChangeEventHandler } from "react";
import { Switch } from "@headlessui/react";
import { useRuxState } from "../../hooks/useRuxState";
import Text from "../Text/Text";

export interface ToggleProps {
  name?: string;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Toggle: React.FC<ToggleProps> = ({ label, onChange, name }) => {
  return (
    <>
      <label
        htmlFor="default-toggle"
        className="inline-flex relative items-center cursor-pointer "
      >
        <input
          type="checkbox"
          value=""
          id="default-toggle"
          className="sr-only peer"
          onChange={onChange}
          name={name}
        />
        <div className="w-16 h-8  peer-focus:outline-none   rounded-full peer bg-neutral-light dark:bg-neutral-dark peer-checked:after:translate-x-full after:border-neutral-light dark:after:border-neutral-dark peer-checked:after:border-primary-light dark:peer-checked:after:border-primary-dark after:border-2 after:content-[''] after:absolute after:bg-white   after:rounded-full after:h-8 after:w-8 after:transition-all  peer-checked:bg-primary-light dark:peer-checked:bg-primary-dark"></div>
        <span className="ml-4">
          <Text>{label || "Default Label"}</Text>
        </span>
      </label>
    </>
  );
};

Toggle.defaultProps = {
  label: "Default Label",
  name: "Default Toggle",
};

export default Toggle;
