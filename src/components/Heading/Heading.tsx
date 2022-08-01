import React from "react";
import { color } from "../../types/basic.types";

export interface HeadingProps {
  children: string;
  color?: color;
  type?: "h1" | "h2" | "h3" | "h4";
}

const Heading: React.FC<HeadingProps> = ({ type, children, color }) => {
  const HeadingStyle = `font-roboto font-black tracking-wider ${
    color === "primary"
      ? "text-primary-light dark:text-primary-dark"
      : color === "neutral"
      ? "text-neutral-light dark:text-neutral-dark"
      : "text-default-light dark:text-default-dark"
  }`;
  if (type === "h1")
    return <h1 className={`${HeadingStyle} text-6xl`}>{children}</h1>;
  if (type === "h2")
    return <h2 className={`${HeadingStyle} text-4xl`}>{children}</h2>;
  if (type === "h3")
    return <h3 className={`${HeadingStyle} text-3xl`}>{children}</h3>;
  else return <h4 className={`${HeadingStyle} text-2xl`}>{children}</h4>;
};

Heading.defaultProps = {
  color: "primary",
  type: "h1",
};

export default Heading;
