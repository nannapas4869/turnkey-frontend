import "../index.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Individual = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      <h1>Dashboard</h1>
      <article
        id="page1"
        className="bg-white w-full h-screen mt-5 mb-5 rounded-xl"
      >
        <div className="container mx-auto">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-row gap-5">
                <p className="text-3xl">
                    Result area performance{" "}
                <span className="text-base text-[#6C6C6C]">
                    January 1, 2024 - December31,2024
                </span>
                </p>
                <input type="date" name="date" className="border p-3  rounded" id="date" value="2024-01-01"
        onChange={(e) => setSelectedDate(e.target.value)} />
                <p className="mt-3">to</p>
                <input type="date" name="date" className="border p-3  rounded" id="date" value="2024-12-31"
        onChange={(e) => setSelectedDate(e.target.value)} />
            </div>
            
            
          </div>
        </div>
      </article>
    </>
  );
};

export default Individual;
