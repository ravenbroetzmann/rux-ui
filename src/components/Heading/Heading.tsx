import React from "react";
import {
  defaultHeading,
  textColors,
  textSizes,
  spacing,
} from "../../utils/tailwindHelpers";
import { ruxStyle } from "../../utils/variantTypes";

export interface HeadingProps {
  type?: "h1" | "h2" | "h3" | "h4";
  style?: ruxStyle;
  children: string;
}
const Heading: React.FC<HeadingProps> = ({ type, style, children }) => {
  const classNames = [
    defaultHeading,
    textSizes[type || "h1"],
    textColors[style || "default"],
    `my-${spacing[type || "h1"]}`,
  ].join(" ");

  console.log(classNames);

  if (type === "h1") return <h1 className={classNames}>{children}</h1>;
  else if (type === "h2") return <h2 className={classNames}>{children}</h2>;
  else if (type === "h3") return <h3 className={classNames}>{children}</h3>;
  else return <h4 className={classNames}>{children}</h4>;
};

Heading.defaultProps = {
  style: "primary",
  type: "h1",
  children: "Hello There",
};

export default Heading;
