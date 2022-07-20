import { useState } from "react";
import { useRuxState } from "./useRuxState";

export function useRuxToggle(initial: boolean = false) {
  const toggleState = useRuxState(initial);

  const on = () => toggleState.set(true);
  const off = () => toggleState.set(false);
  const toggle = () => toggleState.set(!toggleState.get());
  return {
    on,
    off,
    toggle,
    current: toggleState.get,
  };
}
