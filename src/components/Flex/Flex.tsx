import React from "react";
import "./Flex.scss";

export interface FlexProps {
  width?: string;
  height?: string;
  children: React.ReactNode;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?:
    | "space-between"
    | "space-arroud"
    | "center"
    | "flex-start"
    | "flex-end";
  items?: "center" | "flex-start" | "flex-end";
  gap?: string;
}

const Flex: React.FC<FlexProps> = ({
  children,
  direction,
  justify,
  items,
  gap,
  width,
  height,
}) => {
  const style: React.CSSProperties = {
    width,
    height,
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: items,
    gap: gap,
  };
  return <div style={style}>{children}</div>;
};

Flex.defaultProps = {
  width: "auto",
  height: "auto",
  direction: "row",
  justify: "flex-start",
  items: "flex-start",
  gap: "0rem",
};

export default Flex;
