import React, { MouseEventHandler } from "react";
import { color, warning } from "../../types/basic.types";
import "../../../styles/output.css";
export interface ButtonProps {
  children: string;
  color?: color | warning;
  onClick?: MouseEventHandler;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        color === "primary"
          ? "bg-primary-light dark:bg-primary-dark text-default-light dark:text-default-dark disabled:bg-disabled-primary-light  dark:disabled:bg-disabled-primary-dark"
          : color === "neutral"
          ? "bg-neutral-light dark:bg-neutral-dark text-default-light dark:text-default-dark  disabled:bg-disabled-neutral-light  dark:disabled:bg-disabled-neutral-dark"
          : color === "red"
          ? "bg-warning-red-light dark:bg-warning-red-dark text-default-light dark:text-default-dark  disabled:bg-disabled-neutral-light  dark:disabled:bg-disabled-neutral-dark"
          : "bg-default-light dark:bg-default-dark text-neutral-light dark:text-neutral-dark  disabled:bg-disabled-default-light  dark:disabled:bg-disabled-default-dark"
      } px-5 py-4 rounded  min-w-32 flex items-center justify-center  duration-300 transition-all text-center cursor-pointer font-roboto tracking-wider text-lg font-black`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "primary",
};

export default Button;
