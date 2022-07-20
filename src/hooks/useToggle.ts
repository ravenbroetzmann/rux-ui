import { useState } from "react";

export function useToggle<Type>(
  one: Type | boolean = true,
  two: Type | boolean = false
) {
  // current toggle Value
  const [value, setValue] = useState<Type | boolean>(one);

  const set = (index: "first" | "second"): void => {
    if (index === "first") setValue(two);
    else setValue(one);
  };
  const toggle = (): void => {
    if (value === one) setValue(two);
    else setValue(one);
  };
  const current = (): Type | boolean => {
    return value;
  };

  return {
    current,
    toggle,
    set,
  };
}
