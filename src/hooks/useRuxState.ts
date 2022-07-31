import { useState } from "react";

export function useRuxState<T>(initValue: T) {
  const [state, setState] = useState<T>(initValue);
  const get = () => state;
  const set = (value: T) => setState(value);
  return { get, set };
}
