import { useEffect, useState } from "react";
import React from "react";
import { Listbox, Transition } from "@headlessui/react";
import Text from "../Text/Text";
import { SelectorIcon, CheckCircleIcon } from "@heroicons/react/solid";

interface Option {
  id?: string | number;
  title: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: Option[];
  defaultSelectedIndex?: number;
  onSelect?: (selected: Option) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  onSelect,
  defaultSelectedIndex,
}) => {
  const [selected, setSelected] = useState<Option>(
    options[defaultSelectedIndex || 0]
  );

  useEffect(() => onSelect && onSelect(selected), [selected]);

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="rounded-lg h-14  bg-secondary flex flex-row space-between gap-6 items-center w-input">
          <div className="p-3 w-full text-left">
            <Text type="bold" style="dark">
              {selected.title}
            </Text>
          </div>
          <div className="h-full w-14 rounded-r-lg p-3  bg-primary flex justify-center items-center">
            <SelectorIcon className="text-dark" />
          </div>
        </Listbox.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <Listbox.Options className="flex flex-col mt-2 bg-secondary w-input rounded-lg">
            {options.map((option) => {
              return (
                <Listbox.Option
                  key={option.id}
                  value={option}
                  disabled={option.disabled}
                  className="transition-all duration-300"
                >
                  {({ active, selected }) => (
                    <div
                      className={`transition-all duration-300 my-2 w-full p-3  h-12 cursor-pointer flex flex-row items-center justify-center ${
                        active && "bg-secondaryDarker"
                      }`}
                    >
                      <div className="w-12 h-12 p-3 flex items-center justify-center">
                        {selected && <CheckCircleIcon className="text-dark" />}
                      </div>
                      <Text
                        type={selected ? "bold" : "normal"}
                        style={"dark"}
                        className={option.disabled ? "text-darkLighter" : ""}
                      >
                        {option.title}
                      </Text>
                    </div>
                  )}
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

Select.defaultProps = {};

export default Select;
