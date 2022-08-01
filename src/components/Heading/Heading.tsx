import React from "react";
import { color } from "../../types/basic.types";

export interface HeadingProps {
  children: string;
  color?: color;
  type?: "h1" | "h2" | "h3" | "h4";
}

const Heading: React.FC<HeadingProps> = ({ type, children }) => {
  const HeadingStyle = "";
  if (type === "h1") return <h1 className={`${HeadingStyle}`}>{children}</h1>;
  if (type === "h2") return <h2 className={`${HeadingStyle}`}>{children}</h2>;
  if (type === "h3") return <h3 className={`${HeadingStyle}`}>{children}</h3>;
  else return <h4 className={`${HeadingStyle}`}>{children}</h4>;
};

Heading.defaultProps = {
  color: "primary",
  type: "h1",
};

export default Heading;
