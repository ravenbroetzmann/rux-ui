import React, { useContext, useEffect } from "react";
import { useRuxContext } from "../../context/RuxContext";

export interface ColorPaleteProps {
  mode?: "dark" | "light";
}

const ColorPalete: React.FC<ColorPaleteProps> = ({ mode = "light" }) => {
  const ruxContext = useRuxContext();
  useEffect(() => {
    ruxContext && mode === "dark"
      ? ruxContext.darkmode.on()
      : ruxContext?.darkmode.off();
  }, [ruxContext]);
  return (
    <>
      <div className="mb-10 rounded w-20 h-20 bg-primary-light dark:bg-primary-dark "></div>
      <div className="mb-10 rounded w-20 h-20 bg-neutral-light dark:bg-neutral-dark "></div>
      <div className="mb-10 rounded w-20 h-20 bg-default-light-darker dark:bg-default-dark-lighter "></div>
    </>
  );
};

ColorPalete.defaultProps = {
  mode: "light",
};

export default ColorPalete;
