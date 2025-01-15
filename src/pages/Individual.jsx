import "../index.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

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
              <input
                type="date"
                name="date"
                className="border p-3  rounded"
                id="date"
                value="2024-01-01"
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <p className="mt-3">to</p>
              <input
                type="date"
                name="date"
                className="border p-3  rounded"
                id="date"
                value="2024-12-31"
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between mt-10">
              <div className="flex flex-col">
                <p className="text-center">Ability to work <br /> Individually</p>
                <div class="chart-container mt-10">
                  <div class="donut-chart"></div>
                  <div class="chart-label">81%</div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-center">Infrastructure project<br /> audits</p>
                <div class="chart-container mt-10">
                  <div class="donut-chart-2"></div>
                  <div class="chart-label-2">65%</div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-center">Team management and <br /> mentoring</p>
                <div class="chart-container mt-10">
                  <div class="donut-chart-3"></div>
                  <div class="chart-label-3">15%</div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-center">Customer Services</p>
                <div class="chart-container mt-10">
                  <div class="donut-chart-4"></div>
                  <div class="chart-label-4 ">42%</div>
                </div>
              </div>
            </div>
            <p className="mt-10 text-3xl">Your Previous Evaluation KPIs</p>
            <p className="mt-10 text-lg">Team management and mentoring</p>
            <p className="mt-3 text-base">Leadership Management</p>
          </div>
          <div class="overflow-x-auto">
    <table id="myTable" class="min-w-full border-collapse text-left text-sm text-gray-500">
        <thead class="text-gray-700">
            <tr class="border-b">
                <th class="px-4 py-2">Name</th>
                <th class="px-4 py-2">Age</th>
                <th class="px-4 py-2">City</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b">
                <td class="px-4 py-2">John Doe</td>
                <td class="px-4 py-2">25</td>
                <td class="px-4 py-2">New York</td>
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">Jane Smith</td>
                <td class="px-4 py-2">30</td>
                <td class="px-4 py-2">Los Angeles</td>
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">Emily Johnson</td>
                <td class="px-4 py-2">22</td>
                <td class="px-4 py-2">Chicago</td>
            </tr>
        </tbody>
    </table>
</div>
        </div>
      </article>
    </>
  );
};

export default Individual;
