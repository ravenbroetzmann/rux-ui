import React from "react";
import { textSizes, textColors } from "../../utils/tailwindHelpers";
import { ruxStyle } from "../../utils/variantTypes";

export interface TextProps {
  type: "normal" | "bold";
  style?: ruxStyle;
  children: string;
}

const Text: React.FC<TextProps> = ({ type, style, children }) => {
  return (
    <p
      className={`${type === "normal" ? "font-normal" : "font-bold"} ${
        textSizes.normal
      } ${textColors[style || "dark"]} font-roboto tracking-wider`}
    >
      {children}
    </p>
  );
};

Text.defaultProps = {};

export default Text;
