import React from "react";
import "./Card.scss";

export interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};

Card.defaultProps = {};

export default Card;
