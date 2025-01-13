import "../index.css";
import React, { useState, useEffect } from "react";
import SearchBar_Employee from "../components/SearchBar_employee";
import { Link } from "react-router-dom";
import DataTable_Employees from "../components/Datable__Employees";
import Select from "react-select";
import { Textarea } from '@headlessui/react';
import Summary from './Summary';
const Deadline = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [instruction, setInstruction] = useState(""); 
  
    const isAllSelected = selectedDate !== "" && instruction.trim() !== "";
  return (
    <div className="my-5">
      <article id="page1" className="bg-white w-full h-screen ">
        <div className="container mx-auto">
          <div className="flex justify-start py-10 px-10">
            <Link to="/AssignKpi">
              <p className="text-xl text-[#4F46E5]">
                <i className="ri-arrow-left-s-line"></i> Back
              </p>
            </Link>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-row justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 purple__color rounded-full z-10 bg-[#4F46E5]">
                  <span className="text-3xl">
                    <i className="ri-check-line text-5xl text-white"></i>
                  </span>
                </div>
                <span className="purple__text relative top-2">Select KPIs</span>
              </div>
              <div className="h-px border__color__gray -ml-10 -mr-10 w-44 z-0"></div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 purple__color rounded-full z-10 bg-[#4F46E5]">
                  <span className="text-3xl">
                    <i className="ri-check-line text-5xl text-white"></i>
                  </span>
                </div>
                <span className="purple__text relative top-2">
                  Select Employees
                </span>
              </div>
              <div className="h-px border__color__purple -ml-10 -mr-10 w-44 z-0"></div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 purple__color rounded-full z-10 bg-white">
                  <span className="text-3xl purple__text">3</span>
                </div>
                <span className="gray__text relative top-2">
                  Set Objectives
                </span>
              </div>
              <div className="h-px border__color__gray -ml-10 -mr-10 w-44 z-0"></div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 gray__color rounded-full z-10 bg-white">
                  <span className="text-3xl gray__text">4</span>
                </div>
                <span className="gray__text relative top-2">
                  Preview & Confirm
                </span>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <h1 className="mt-16">Choose a Deadline for the selected KPIs</h1>
            <p className="subtext__color">
              Set clear. measurable target for each KPI to track employee
              performance.
            </p>
            <label
                htmlFor="date"
                class="block text-xl font-normal mt-10"
            >
               Set Deadline
            </label>
            <input type="date" name="date" className="border p-3 w-4/6 rounded mt-4" id="date" value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)} />
           
            <label
                htmlFor="date"
                class="block text-xl font-normal mt-10"
            >
                Instruction (Optional)
            </label>
            <Textarea
            className="border p-3 w-4/6 rounded mt-4"
            rows={3}
            placeholder="Instruction detail"
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)} 
            />

          </div>
          <div className="container mx-auto px-4 pb-10">
            <div className="flex justify-end mt-10 ">
            <Link to="/Summary">
                <button
                className={`button__style ${isAllSelected ? "background_blue" : "background_gray"}`}
                disabled={!isAllSelected}
                >
                Next
                </button>
            </Link>
            </div>
        </div>
        </div>
      </article>
    </div>
  );
};

export default Deadline;
