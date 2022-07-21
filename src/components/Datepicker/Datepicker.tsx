import React from "react";
import { useRuxState } from "../../hooks/useRuxState";
import IconButton from "../IconButton/IconButton";
import Label from "../Label/Label";
import P from "../P/P";
import "./Datepicker.scss";

export interface DatepickerProps {}

const Datepicker: React.FC<DatepickerProps> = ({}) => {
  const currentDate = useRuxState(new Date());
  const dateString = `comming soon`;

  const months = {};
  return (
    <div className="datpicker-wrapper">
      <div className="display">
        <P style="bold" size="label">
          {dateString}
        </P>
        <IconButton
          variant="primary"
          featherIconName="edit"
          onClick={() => {}}
        />
      </div>
      <div className="picker"></div>
    </div>
  );
};

Datepicker.defaultProps = {};

export default Datepicker;
