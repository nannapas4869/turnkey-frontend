import "../index.css";
import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
// ฟังก์ชันนี้อาจจะได้ไปใช้ใน dashboard ของทุก role
import Trend from "../assets/images/trand.png";
import Select from "react-select";
const options = [
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
  ];
export default function Dashboard() {
  return (
    <>
     <article id="page1" className="bg-white w-full h-fit  mt-5 mb-5 rounded-xl">
        <div className="container mx-auto px-4 py-6">
            <p className='text-2xl font-semibold'>Dashboard</p>
            <p className="text-base font-light">View data the within your organization.</p>
            <div className="flex flex-row gap-4 mb-5">
        <div className="bg-white p-6 rounded-lgw-6/12">
          <p className="text-2xl text-center">Hello, Colin</p>
          <p className="text-xl text-center font-light mt-4">
          Current company performance 
          rankings for this month are:
          </p>
          <p className="text-7xl text-center mt-5 text-[#FEB135] font-light">
            64 %
          </p>
          <p className="text-center mt-6 text-[#3AA94F]">
            Up 2 From previous evaluation
          </p>
          <div className="bg-[#0F0E0E] flex justify-center w-44 block mx-auto p-4 mt-5 rounded-full">
            <p className="text-white">Measurement</p>
          </div>
          <p className="mt-10 text-red-500 font-medium">Remark *</p>
          <div className="flex flex-row gap-4 mt-5">
            <div className="w-8 h-8 bg-[#3AA94F] rounded-full"></div>
            <p className="flex items-center">Score over 75 Score</p>
          </div>
          <div className="flex flex-row gap-4 mt-5">
            <div className="w-8 h-8 bg-[#FEB135] rounded-full"></div>
            <p className="flex items-center">
              Score over 50 score and below 75 score
            </p>
          </div>
          <div className="flex flex-row gap-4 mt-5">
            <div className="w-8 h-8 bg-[#FD4444] rounded-full"></div>
            <p className="flex items-center">below 50 score</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg  w-full">
          <div className="flex flex-row gap-6 justify-between">
            <div className="flex flex-row gap-6">
              <div className="text-3xl mt-5 mb-20">Your Performance Repo</div>
              <img src={Trend} alt="trend" className="w-h mt-6" />
            </div>
            <div>
              <Select options={options} placeholder="2024" />
            </div>
          </div>

          <div className="relative">
            <div className="relative h-64 ">
              <div className="grid grid-cols-12 items-end  gap-2 text-center h-96">
                <div className="flex flex-col items-center">
                  <div className="bg-green-500  h-3/4 w-4 rounded-full h-80"></div>
                  <span className="text-sm text-gray-600 mt-1 mb-4">Jan</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-500  w-4 rounded-full h-48"></div>
                  <span className="text-sm text-gray-600 mt-1 mb-4">Feb</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-red-500 h-3/4 w-4 rounded-full h-32"></div>
                  <span className="text-sm text-gray-600 mt-1 mb-4">Mar</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-red-500 h-1/2 w-4 rounded-full h-16"></div>
                  <span className="text-sm text-gray-600 mt-1 mb-4">Apr</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-red-400 h-1/6 w-4 rounded-full h-14"></div>
                  <span className="text-sm text-gray-600 mt-1 mb-4">May</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 w-4 rounded-full h-72"></div>
                  <span className="text-sm text-gray-600 mt-1 mb-4">Jun</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 w-4 rounded-full h-64"></div>
                  <span className="text-sm text-gray-600 mt-1 mb-4">Jul</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 w-4 rounded-full h-72"></div>
                  <span className="text-sm text-gray-600 mt-1 mb-4">Aug</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-400 h-1/2 w-4 rounded-full h-40"></div>
                  <span className="text-sm text-gray-600 mt-1 mb-4">Sep</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 h-3/4 w-4 rounded-full h-52"></div>
                  <span className="text-sm text-gray-600 mt-1 mb-4">Oct</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-red-400 h-1/6 w-4 rounded-full h-14"></div>
                  <span className="text-sm text-gray-600 mt-1 mb-4">Nov</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-green-500  w-4 rounded-full h-64"></div>
                  <span className="text-sm text-gray-600  mb-4 mt-1">Dec</span>
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-0 flex flex-col height-level justify-between">
              <span className="text-sm text-gray-600">100</span>
              <span className="text-sm text-gray-600">75</span>
              <span className="text-sm text-gray-600">50</span>
              <span className="text-sm text-gray-600">25</span>
              <span className="text-sm text-gray-600">0</span>
            </div>
          </div>
        </div>
      </div>
        </div>
    </article>
    </>
   
  )
}
