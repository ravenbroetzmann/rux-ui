import { useState } from "react";

export function useRuxState<T>(defaultValue: T) {
  const [state, setState] = useState<T>(defaultValue);

  const set = (value: T) => setState(value);
  const get = () => state;

  return {
    set,
    get,
  };
}
