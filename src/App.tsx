import React, { useState } from "react";
import axios from "axios";
import { BigCalendar } from "./components";

function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const [solarDate, setSolorDate] = useState("");
  const [lunarDate, setLunarDate] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6);

    const formatDate = `solYear=${year}&solMonth=${month}&solDay=${day}`;
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className={"mb-8 mt-4  flex items-center justify-center"}
      >
        <div>
          <div className="mb-2 flex items-center justify-center">
            <p>날짜 :</p>
            <input
              type="number"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={"ml-2 w-60 border-2"}
            />
          </div>
          <div className="flex items-center justify-center">
            <p>제목 :</p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={"ml-2 w-60 border-2"}
            />
          </div>
        </div>

        <button className={"ml-4 border-2 p-2"}>변환하기</button>
      </form>

      <BigCalendar title={title} solarDate={solarDate} lunarDate={lunarDate} />
    </div>
  );
}

export default App;
