import React from "react";
import { color } from "../../types/basic.types";

export interface TextProps {
  children: string;
  type: "normal" | "bold";
  color: color;
}

const Text: React.FC<TextProps> = ({ children, type, color }) => {
  return (
    <p
      className={`font-roboto tracking-wider text-lg ${
        type === "bold" ? "font-black" : "font-semibold"
      } ${
        color === "primary"
          ? "text-primary-light dark:text-primary-dark"
          : color === "neutral"
          ? "text-neutral-light dark:text-neutral-dark"
          : "text-default-light dark:text-default-dark"
      }`}
    >
      {children}
    </p>
  );
};

Text.defaultProps = {
  type: "normal",
  color: "neutral",
};

export default Text;
