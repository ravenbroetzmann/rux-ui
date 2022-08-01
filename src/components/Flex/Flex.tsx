import React, { HTMLProps, ReactNode } from "react";
import "../../../styles/output.css";
export interface FlexProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  direction?: "row" | "column";
  justify?: "start" | "arround" | "between" | "center";
  align?: "start" | "center";
  flexwrap?: boolean;
}

const Flex: React.FC<FlexProps> = ({
  children,
  direction,
  justify,
  align,
  flexwrap,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`flex gap-4 ${direction === "row" ? "flex-row" : "flex-col"} ${
        align === "center" ? "items-center" : "items-start"
      } ${
        justify === "arround"
          ? "justify-around"
          : justify === "between"
          ? "justify-between"
          : justify === "center"
          ? "justify-center"
          : "justify-start"
      } ${flexwrap ? "flex-wrap" : "flex-nowrap"} ${props.className}`}
    >
      {children}
    </div>
  );
};

Flex.defaultProps = {
  direction: "column",
  justify: "start",
  align: "start",
  flexwrap: true,
};

export default Flex;
