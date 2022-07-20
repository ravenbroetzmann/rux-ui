import React from "react";
import "./P.scss";

export interface PProps {
  children: string;
  color?: "primary" | "dark" | "light";
  style?: "bold" | "default";
}

const P: React.FC<PProps> = ({ children, color, style }) => {
  return <p className={`${color} ${style}`}>{children}</p>;
};

P.defaultProps = {
  color: "dark",
  style: "default",
};

export default P;
