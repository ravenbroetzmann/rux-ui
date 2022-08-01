import { useRuxContext } from "../context/RuxContext";
import { useRuxState } from "./useRuxState";

interface UseValidationConfig {
  type: "text" | "email" | "password";
  maxChars: number;
  minChars: number;
}

interface Validation {
  isValid: boolean;
  value: string;
  message: string | null;
}

export function useValidationState(
  initValue: string,
  { type = "text", maxChars = 255, minChars = 3 }: UseValidationConfig
) {
  const state = useRuxState<string>(initValue);
  const set = state.set;
  const get = () => validate(state.get(), { type, minChars, maxChars });
}

function validate(value: string, config: UseValidationConfig): Validation {
  const validReturn = {
    isValid: true,
    value,
    message: null,
  };
  try {
    if (config.type === "text")
      if (isValidText(value)) return validReturn;
      else throw "please enter an Text";
    if (config.type === "email")
      if (isValidEmail(value)) return validReturn;
      else throw "please enter an valid Email";
    if (config.type === "password")
      if (isValidPassword(value)) return validReturn;
      else throw "please enter an Valid Password [CONDITIONS]";
  } catch (message: unknown) {
    return {
      isValid: false,
      value,
      message:
        typeof message === "string"
          ? message
          : "sorry, an unknown error occured while validation",
    };
  }
}

const isValidEmail = (email: string) => {
  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validEmailRegex)) return true;
  else return false;
};
const isValidText = (text: string) => (typeof text === "string" ? true : false);

// TODO PW VALIDATION
const isValidPassword = (pw: string) => true;
