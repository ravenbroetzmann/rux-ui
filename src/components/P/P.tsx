import React from "react";
import "./P.scss";

export interface PProps {
  children: string;
  color?: "primary" | "dark" | "light";
  size?: "default" | "label";
  style?: "bold" | "default";
}

const P: React.FC<PProps> = ({ children, color, style, size }) => {
  return <p className={`${color} ${style} size-${size}`}>{children}</p>;
};

P.defaultProps = {
  color: "dark",
  style: "default",
  size: "default",
};

export default P;
