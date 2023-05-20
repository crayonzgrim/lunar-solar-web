import React from "react";
import moment from "moment";
import "moment-lunar";

type LunarDateHeaderProps = {
  label: string;
  date: string;
};

export const LunarDateHeader = (props: LunarDateHeaderProps) => {
  const { label, date, ...others } = props;

  return (
    <div {...others}>
      <button className="rbc-button-link" role="cell">
        {label}
      </button>
      <div className="text-gray-700">
        {moment(date).lunar().format("MM. DD")}
      </div>
    </div>
  );
};
