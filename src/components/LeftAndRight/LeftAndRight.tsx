import React, { HTMLProps, ReactFragment, ReactNode } from "react";
import "../../../styles/output.css";
export interface LeftAndRightProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

const LeftAndRight: React.FC<LeftAndRightProps> = ({ children, ...props }) => {
  return (
    <div {...props} className={`w-full px-24 mt-6 mb-6 ${props.className}`}>
      {children as ReactNode}
    </div>
  );
};

LeftAndRight.defaultProps = {};

export default LeftAndRight;
