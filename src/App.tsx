import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

import { BigCalendar } from "./components";
import { api } from "./api";

function App() {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFormatDate = (type: "startDate" | "endDate", date: string) => {
    if (type === "startDate") {
      const startYear = date.slice(0, 4);
      const startMonth = date.slice(4, 6);
      const startDay = date.slice(6);

      return `solYear=${startYear}&solMonth=${startMonth}&solDay=${startDay}`;
    } else {
      const endYear = date.slice(0, 4);
      const endMonth = date.slice(4, 6);
      const endDay = date.slice(6);

      return `solYear=${endYear}&solMonth=${endMonth}&solDay=${endDay}`;
    }
  };

  const [arrState, setArrState] = useState<any>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // 양력 날짜에 따른 음력 날짜 api
      const startApi = await axios.get(
        `${api}&${handleFormatDate("startDate", startDate.replaceAll("-", ""))}`
      );
      const endApi = await axios.get(
        `${api}&${handleFormatDate("endDate", endDate.replaceAll("-", ""))}`
      );

      const startFormatDate = startApi.data.response.body.items.item;
      const endFormatDate = endApi.data.response.body.items.item;

      const start = `${startFormatDate.lunYear.toString()}-${
        startFormatDate.lunMonth
      }-${startFormatDate.lunDay}`;
      const end = `${endFormatDate.lunYear.toString()}-${
        endFormatDate.lunMonth
      }-${endFormatDate.lunDay}`;

      // const start = `${new Date().getFullYear()}-${startFormatDate.lunMonth}-${
      //   startFormatDate.lunDay
      // }`;
      // const end = `${new Date().getFullYear()}-${endFormatDate.lunMonth}-${
      //   endFormatDate.lunDay
      // }`;

      const date = {
        start: moment(start).format().toLocaleString(),
        end: moment(end).format().toLocaleString(),
        title,
        isDraggable: true,
      };

      setArrState([...arrState, date]);

      localStorage.setItem("date", JSON.stringify([...arrState, date]));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className={"mb-5 mt-2 flex items-center justify-center"}
      >
        <div className={"flex w-[600px] rounded-md border p-2"}>
          <div className="flex w-full flex-col">
            <div className="w-full">
              <p>시작 날짜 :</p>
              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={"w-full border-2"}
              />
            </div>
            <div className="mt-2 w-full">
              <p>마지막 날짜 :</p>
              <input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className={"w-full border-2"}
              />
            </div>
          </div>
          <div className="w-full pl-2">
            <p>제목 :</p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={"w-full border-2"}
            />
          </div>
        </div>

        <button className={"ml-4 rounded-lg border p-2"}>변환하기</button>
      </form>

      <div className={"pl-[8rem] pr-[8rem]"}>
        <BigCalendar />
      </div>
    </div>
  );
}

export default App;
