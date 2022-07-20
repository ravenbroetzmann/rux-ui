import React, { useEffect } from "react";
import { useRuxState } from "../../hooks/useRuxState";
import { useToggle } from "../../hooks/useToggle";
import "./Switch.scss";

export interface SwitchProps {
  onSwitch: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ onSwitch }) => {
  return (
    <label className="switch">
      <input type="checkbox" onChange={(e) => onSwitch(e.target.checked)} />
      <span className="slider round"></span>
    </label>
  );
};

Switch.defaultProps = {
  onSwitch: (checked) => {
    console.log("Switch: ", checked ? "On" : "Off");
  },
};

export default Switch;
