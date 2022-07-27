import React, { useEffect } from "react";
import { useRuxContext } from "../../context/RuxContext";
import { bgColors, classNames } from "../../utils/tailwindHelpers";
import { ruxStyle } from "../../utils/variantTypes";
import Text from "../Text/Text";

export interface ButtonProps {
  style?: ruxStyle;
  variant?: "big" | "small";
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  style,
  variant,
  children,
  onClick,
}) => {
  const ruxContext = useRuxContext();
  useEffect(() => {
    console.log(ruxContext);
  }, [ruxContext]);
  return (
    <button
      onClick={onClick}
      className={classNames([
        bgColors[style || "default"],
        "rounded-lg",
        "transition-all duration-500 flex items-center justify-center",
        variant === "big" ? "py-3 px-5 h-14 " : "py-2 px-3 h-10",
      ])}
    >
      <Text
        type="bold"
        style={
          style === "default" || style === "secondary" ? "dark" : "default"
        }
      >
        {children}
      </Text>
    </button>
  );
};

Button.defaultProps = {
  onClick: (e) => console.log("clicked"),
  style: "default",
  variant: "big",
};

export default Button;
