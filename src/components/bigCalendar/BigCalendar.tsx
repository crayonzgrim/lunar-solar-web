import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Calendar,
  momentLocalizer,
  CalendarProps,
  SlotInfo,
  Views,
  DateLocalizer,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/ko";
import "moment-lunar";

import { DateCellStyle } from "./DateCellStyle";
import "../../styles/calendar.css";
import { StorageDateType } from "../../types";
import { LunarDateHeader } from "../options";
import { Event } from "../options";

type BigCalendarProps = {
  //
} & Omit<CalendarProps, "localizer">;

const localizer = momentLocalizer(moment);

function EventAgenda({ event }: any) {
  return (
    <span>
      <em style={{ color: "magenta" }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  );
}

export const BigCalendar = (props: BigCalendarProps) => {
  /** Property */

  const data = localStorage.getItem("date");

  const [storageDate, setStorageDate] = useState<StorageDateType[]>([]);

  /** Function */
  const handleSelectEvent = useCallback((event: any) => {
    window.alert(event.title);
  }, []);

  const handleSelectSlot = useCallback((data: SlotInfo) => {
    // const title = window.prompt("New Event Name...");
    //
    // if (title) {
    //   console.log(title);
    // }
  }, []);

  const { components, defaultDate } = React.useMemo(
    () => ({
      components: {
        month: {
          dateHeader: LunarDateHeader,
        },
        // dateCellWrapper: DateCellStyle,
        agenda: {
          event: EventAgenda,
        },
        event: Event,
      },
      defaultDate: new Date(),
    }),
    []
  );

  useEffect(() => {
    if (data) {
      setStorageDate(JSON.parse(data));
    }
  }, [data]);

  /** Render */
  return (
    <Calendar
      components={components}
      defaultView={Views.MONTH}
      localizer={localizer}
      events={storageDate}
      formats={{
        monthHeaderFormat: (date) => moment(date).locale("ko").format("M월"),
      }}
      startAccessor="start"
      endAccessor="end"
      selectable
      onSelectEvent={handleSelectEvent}
      onSelectSlot={handleSelectSlot}
      style={{ height: "70vh" }}
    />
  );
};
