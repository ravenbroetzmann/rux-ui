import React from "react";
import Heading from "../Heading/Heading";
import P from "../P/P";
import "./Label.scss";

export interface LabelProps {
  type?: "primary" | "light" | "dark";
  children: string;
}

const Label: React.FC<LabelProps> = ({ type, children }) => {
  return <label className={type}>{children}</label>;
};

Label.defaultProps = {
  type: "dark",
};

export default Label;
