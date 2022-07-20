import React from "react";
import "./Heading.scss";

export interface HeadingProps {
  type?: "h1" | "h2" | "h3" | "h4";
  children: string;
  color?: "primary" | "dark" | "light";
}

const Heading: React.FC<HeadingProps> = ({ type, children, color }) => {
  if (type === "h1") return <h1 className={color}>{children}</h1>;
  if (type === "h2") return <h2 className={color}>{children}</h2>;
  if (type === "h3") return <h3 className={color}>{children}</h3>;
  return <h4 className={color}>{children}</h4>;
};

Heading.defaultProps = {
  type: "h1",
  color: "dark",
};

export default Heading;
