import React, { useRef } from "react";
import P from "../P/P";
import "./Alert.scss";
//@ts-ignore
import FeatherIcon from "feather-icons-react";
export interface AlertProps {
  type: "default" | "error" | "success" | "warning";
  children: string;
}

const Alert: React.FC<AlertProps> = ({ type, children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleClose = () => {
    ref.current?.classList.add("hidden");
    //after transition ends, delete alert
    setTimeout(() => ref.current?.remove(), 500);
  };
  return (
    <div ref={ref} className={`alert ${type}`}>
      <p className="bold">{children}</p>
      <button onClick={handleClose}>
        <FeatherIcon icon="x-circle" />
      </button>
    </div>
  );
};

Alert.defaultProps = {
  type: "default",
};

export default Alert;
