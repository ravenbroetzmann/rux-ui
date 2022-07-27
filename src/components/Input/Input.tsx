import React, { ChangeEvent, ChangeEventHandler } from "react";

export interface InputProps {
  placeholder?: string;
  type?: "text" | "email" | "password";
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    type: "text" | "email" | "password"
  ) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange && onChange(e, type || "text")}
      className="bg-secondary text-dark font-roboto font-black px-3 placeholder:text-gray-500 placeholder:font-roboto placeholder:font-black  h-14 w-input rounded-lg border-none outline-none"
    />
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "e.g John Doe",
};

export default Input;
