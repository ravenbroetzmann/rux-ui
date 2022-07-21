import React from "react";
import "./Datepicker.scss";

export interface DatepickerProps {}

const Datepicker: React.FC<DatepickerProps> = ({}) => {
  return (
    <div className="datpicker-wrapper">
      <div className="display"></div>
      <div className="picker"></div>
    </div>
  );
};

Datepicker.defaultProps = {};

export default Datepicker;
