import React, { MouseEventHandler } from "react";
import P from "../P/P";
import "./Button.scss";

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "default" | "dark" | "alert";
  size?: "default" | "small";
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  variant,
  size,
  children,
}) => {
  return (
    <button
      className={`button size-${size} variant-${variant}`}
      onClick={onClick}
    >
      <P style="bold" color={variant === "default" ? "dark" : "light"}>
        {children}
      </P>
    </button>
  );
};

Button.defaultProps = {
  onClick: (event) => {},
  variant: "default",
  size: "default",
};

export default Button;
