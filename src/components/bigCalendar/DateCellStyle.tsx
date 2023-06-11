import React from "react";
import { DateCellWrapperProps } from "react-big-calendar";

type DateCellStyleProps = {
  //
} & Pick<DateCellWrapperProps, "children">;

export const DateCellStyle = (props: DateCellStyleProps) => {
  const { children, ...others } = props;

  return <div className="text-red-700">{children}</div>;
};
