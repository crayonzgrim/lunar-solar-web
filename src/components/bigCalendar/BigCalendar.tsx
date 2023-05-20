import React, { useCallback } from "react";
import {
  Calendar,
  momentLocalizer,
  DateLocalizer,
  CalendarProps,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { LunarDateHeader } from "./LunarDateHeader";

type BigCalendarProps = {
  title: string;
  solarDate: string;
  lunarDate: string;
} & Pick<CalendarProps, "events">;

export const BigCalendar = (props: BigCalendarProps) => {
  const { events, title, solarDate, lunarDate, ...others } = props;

  const handleSelectEvent = useCallback((event: any) => {
    window.alert(event.title);
  }, []);

  const handleSelectSlot = useCallback(() => {
    //
  }, []);

  return (
    <Calendar
      // components={{
      //   month: {
      //     dateHeader: LunarDateHeader,
      //   },
      // }}
      localizer={momentLocalizer(moment)}
      events={events}
      startAccessor="start"
      endAccessor="end"
      selectable
      onSelectEvent={handleSelectEvent}
      onSelectSlot={handleSelectSlot}
      style={{ height: "500px" }}
    />
  );
};
