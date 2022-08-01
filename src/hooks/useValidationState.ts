import { useRuxContext } from "../context/RuxContext";
import { ValidationConfig } from "../types/validation.types";
import { validate } from "../utils/validation";
import { useRuxState } from "./useRuxState";

export function useValidationState(
  initValue: string,
  config: ValidationConfig
) {
  const state = useRuxState<string>(initValue);
  const set = state.set;
  const get = () => validate(state.get(), config);

  return { set, get };
}
