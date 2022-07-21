import React from "react";
import "./AlertInline.scss";

export interface AlertInlineProps {
  type: "default" | "error" | "success" | "warning";
  children: string;
}

const AlertInline: React.FC<AlertInlineProps> = ({ type, children }) => {
  return (
    <div className={`alert alert-inline ${type}`}>
      <p className="bold">{children}</p>
    </div>
  );
};

AlertInline.defaultProps = {
  type: "default",
};

export default AlertInline;
