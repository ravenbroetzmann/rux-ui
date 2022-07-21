import React, { MouseEventHandler } from "react";
import "./IconButton.scss";
//@ts-ignore
import FeatherIcon from "feather-icons-react";
import P from "../P/P";
export interface IconButtonProps {
  featherIconName?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "default" | "dark" | "alert";
  size?: "default" | "small";
  textLabel?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  featherIconName,
  textLabel,
  onClick,
  variant,
  size,
}) => {
  return (
    <button
      className={`button icon-button size-${size} variant-${variant}`}
      onClick={onClick}
    >
      {featherIconName && <FeatherIcon icon={featherIconName} />}
      {textLabel && !featherIconName && (
        <P style="bold" size="label">
          {textLabel}
        </P>
      )}
    </button>
  );
};

IconButton.defaultProps = {
  variant: "default",
  size: "default",
};

export default IconButton;
