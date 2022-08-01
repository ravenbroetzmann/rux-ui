import React, { ChangeEvent, ChangeEventHandler } from "react";

export interface InputProps {
  type?: "text" | "password" | "email";
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  defaultValue?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  name,
  onChange,
  defaultValue,
}) => {
  return (
    <input
      defaultValue={defaultValue || undefined}
      type={type}
      className="bg-default-light-darker text-neutral-light dark:text-neutral-dark dark:bg-default-dark-lighter border-none rounded-md font-bold outline-none py-4 px-6 w-full"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    ></input>
  );
};

Input.defaultProps = {};

export default Input;
