import React, { useContext } from "react";
import { createContext, ReactNode } from "react";
import { useToggle } from "../hooks/useToggle";
import type { toggle } from "../hooks/useToggle";

interface RuxContext {
  darkmode: toggle;
}

const context = React.createContext<RuxContext | {}>({});

export default function RuxContext({ children }: { children: ReactNode }) {
  const darkmode = useToggle();
  const contextValue: RuxContext = {
    darkmode,
  };

  return (
    <context.Provider value={contextValue}>
      <div className={darkmode.current ? "dark" : "p-0 m-0 "}>{children}</div>
    </context.Provider>
  );
}

export const useRuxContext = () => useContext(context);
