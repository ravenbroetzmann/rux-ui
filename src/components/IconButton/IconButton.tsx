import React, { MouseEventHandler } from "react";
import "./IconButton.scss";
//@ts-ignore
import FeatherIcon from "feather-icons-react";
export interface IconButtonProps {
  featherIconName: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "default" | "dark" | "alert";
  size?: "default" | "small";
}

const IconButton: React.FC<IconButtonProps> = ({
  featherIconName,
  onClick,
  variant,
  size,
}) => {
  return (
    <button
      className={`icon-button size-${size} variant-${variant}`}
      onClick={onClick}
    >
      <FeatherIcon icon={featherIconName} />
    </button>
  );
};

IconButton.defaultProps = {
  variant: "default",
  size: "default",
};

export default IconButton;
