import React from "react";
import moment from "moment";
import "moment-lunar";
import { DateHeaderProps } from "react-big-calendar";

type LunarDateHeaderProps = {
  //
} & Pick<DateHeaderProps, "label" | "date">;

export const LunarDateHeader = (props: LunarDateHeaderProps) => {
  const { label, date } = props;

  return (
    <div>
      <button className="rbc-button-link" role="cell">
        {label}
      </button>
      <div className="text-sm text-gray-400">
        {moment(date).lunar().format("MM. DD")}
      </div>
    </div>
  );
};
