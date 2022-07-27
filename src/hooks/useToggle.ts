import { useState } from "react";

export interface toggle {
  on: () => void;
  off: () => void;
  toggle: () => void;
  current: boolean;
}

export const useToggle = (inititalValue: boolean = false): toggle => {
  const [current, setCurrent] = useState<boolean>(inititalValue);
  const on = () => setCurrent(true);
  const off = () => setCurrent(false);
  const toggle = () => (current ? setCurrent(false) : setCurrent(true));

  return {
    on,
    off,
    toggle,
    current,
  };
};
