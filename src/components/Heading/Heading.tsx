import React from "react";

export interface HeadingProps {
  type: "h1" | "h2" | "h3" | "h4";
  style: "default" | "primary" | "secondary";
}

const Heading: React.FC<HeadingProps> = ({ type, style }) => {
  return <div></div>;
};

Heading.defaultProps = {};

export default Heading;
