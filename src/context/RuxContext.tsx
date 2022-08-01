import React, { useContext } from "react";
import { createContext, ReactNode } from "react";
import { useToggle } from "../hooks/useToggle";
import type { toggle } from "../hooks/useToggle";

export interface RuxContextValues {
  darkmode: toggle;
}

const context = React.createContext<RuxContextValues | null>(null);

export default function RuxContext({ children }: { children: ReactNode }) {
  const darkmode = useToggle(false);
  const contextValue: RuxContextValues = {
    darkmode,
  };

  return (
    <context.Provider value={contextValue}>
      <div
        className={`${
          darkmode.current ? "dark" : ""
        } transition-all duration-500`}
      >
        {children}
      </div>
    </context.Provider>
  );
}

export const useRuxContext = () => useContext(context);
