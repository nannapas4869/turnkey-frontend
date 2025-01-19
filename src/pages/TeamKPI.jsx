import "../index.css";
import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Trend from "../assets/images/trand.png";
import Select from "react-select";
import Andrew from "../assets/images/Andrew.png";
import Milton from "../assets/images/milton.png";
import Lisa from "../assets/images/lisa.png";
import Lena from "../assets/images/L.png";

const TeamKPI = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dataSectionOne, setDataSectionOne] = useState([
    {
      KPIs: "Demonstarte Leadership with client",
      Score: "30%",
      Review: "Adequate",
      Evaluation: "2023-01-01",
    },
    {
      KPIs: "Exhibits thought leadership around new ideas, strategies and opportunity",
      Score: "5%",
      Review: "Need help",
      Evaluation: "2023-01-01",
    },
  ]);
  const [dataSectionTwo, setDataSectionTwo] = useState([
    {
      KPIs_2: "Attandance & Punctuality",
      Score_2: "30%",
      Review_2: "Adequate",
      Evaluation_2: "2023-01-01",
    },
    {
      KPIs_2: "Behavior and Attitude towards others",
      Score_2: "5%",
      Review_2: "Need help",
      Evaluation_2: "2023-01-01",
    },
  ]);
  const [dataSectionThree, setDataSectionThree] = useState([
    {
      KPIs_3: "Always be ready to help",
      Score_3: "30%",
      Review_3: "Adequate",
      Evaluation_3: "2023-01-01",
    },
    {
      KPIs_3: "Be a problem solver",
      Score_3: "5%",
      Review_3: "Need help",
      Evaluation_3: "2023-01-01",
    },
  ]);
  const [dataSectionFourth, setDataSectionFourth] = useState([
    {
      KPIs_4: "Demonstrate Leadership with client",
      comment: "ปรับปรุงด้าน......"
    },
    {
      
      KPIs_4: "Exhibits thought leadership around new ideas, strategies and opportunity",
      comment: "ปรับปรุงด้าน......"
    },
  ]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedData = [...dataSectionOne].sort((a, b) => {
      const valueA = a[key] || "";
      const valueB = b[key] || "";
      if (direction === "ascending") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
    setDataSectionOne(sortedData);
    const sortedData_2 = [...dataSectionTwo].sort((a, b) => {
      const valueA = a[key] || "";
      const valueB = b[key] || "";
      if (direction === "ascending") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
    setDataSectionTwo(sortedData_2);
    const sortedData_3 = [...dataSectionThree].sort((a, b) => {
      const valueA = a[key] || "";
      const valueB = b[key] || "";
      if (direction === "ascending") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
    setDataSectionThree(sortedData_3);
    const sortedData_4 = [...dataSectionFourth].sort((a, b) => {
      const valueA = a[key] || "";
      const valueB = b[key] || "";
      if (direction === "ascending") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
    setDataSectionFourth(sortedData_4);
  };
  const options = [
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
  ];
  const team = [
    { value: "ทีมจิรยุทธ์", label: "ทีมจิรยุทธ์"},
    { value: "ทีมปารณีย์", label: "ทีมปารณีย์"}
  ]
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <h1>Dashboard</h1>
    <article id="page1" className="bg-white w-full  mt-5 mb-5 rounded-xl">
    <div className="container mx-auto">
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
                <p className="text-center">
                  Ability to work <br /> Individually
                </p>
                <div class="chart-container mt-10">
                  <div class="donut-chart"></div>
                  <div class="chart-label">81%</div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-center">
                  Infrastructure project
                  <br /> audits
                </p>
                <div class="chart-container mt-10">
                  <div class="donut-chart-2"></div>
                  <div class="chart-label-2">65%</div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-center">
                  Team management and <br /> mentoring
                </p>
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
          <div class="">
            <table
              id="myTable"
              class="min-w-full border-collapse text-left text-sm text-gray-500"
            >
              <thead className="text-gray-700">
                <tr className="border-b">
                  <th
                    className="px-4 py-2 cursor-pointer"
                    onClick={() => handleSort("KPIs")}
                  >
                    KPIs
                    {sortConfig.key === "KPIs" && (
                      <i
                        className={`ml-2 ${
                          sortConfig.direction === "ascending"
                            ? "ri-arrow-up-s-fill"
                            : "ri-arrow-down-s-fill"
                        }`}
                      ></i>
                    )}
                  </th>
                  <th
                    class="px-4 py-2 cursor-pointer"
                    onClick={() => handleSort("Score")}
                  >
                    Score
                    {sortConfig.key === "Score" && (
                      <i
                        className={`ml-2 ${
                          sortConfig.direction === "ascending"
                            ? "ri-arrow-up-s-fill"
                            : "ri-arrow-down-s-fill"
                        }`}
                      ></i>
                    )}
                  </th>
                  <th
                    class="px-4 py-2 cursor-pointer"
                    onClick={() => handleSort("Review")}
                  >
                    Review{" "}
                    {sortConfig.key === "Review" && (
                      <i
                        className={`ml-2 ${
                          sortConfig.direction === "ascending"
                            ? "ri-arrow-up-s-fill"
                            : "ri-arrow-down-s-fill"
                        }`}
                      ></i>
                    )}
                  </th>
                  <th
                    className="px-4 py-2 cursor-pointer"
                    onClick={() => handleSort("Evaluation")}
                  >
                    Evaluation Date
                    {sortConfig.key === "Evaluation" && (
                      <i
                        className={`ml-2 ${
                          sortConfig.direction === "ascending"
                            ? "ri-arrow-up-s-fill"
                            : "ri-arrow-down-s-fill"
                        }`}
                      ></i>
                    )}
                  </th>
                  <th>
                    Feedback
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataSectionOne.map((row) => (
                  <tr key={row.KPIs} className="hover:bg-gray-50">
                    <td className=" px-4 py-2 w-2/5">{row.KPIs}</td>
                    <td
                      className={`px-4 py-2 w-44 ${
                        row.Score === "30%"
                          ? "text-yellow-500"
                          : row.Score === "5%"
                          ? "text-red-500"
                          : "text-gray-900"
                      }`}
                    >
                      {row.Score}
                    </td>
                    <td
                      className={`px-4 py-2 h-36 ${
                        row.Review === "Adequate"
                          ? "text-yellow-500"
                          : row.Review === "Need help"
                          ? "text-red-500"
                          : "text-gray-900"
                      }`}
                    >
                      {row.Review}
                    </td>
                    <td className="px-4 py-2 w-44">{row.Evaluation}</td>
                    <td className="w-56">
                        <button className="bg-[#4F46E5] text-white px-3 py-2 w-36 rounded-xl" onClick={openModal}><i class="ri-add-line"></i> Add Feedback</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="container mx-auto px-4">
              <p className="text-3xl mt-10">Individual behavior</p>
            </div>
            <table
              id="myTable"
              class="min-w-full border-collapse text-left text-sm text-gray-500 mt-10"
            >
              <thead className="text-gray-700">
                <tr className="border-b">
                  <th
                    className="px-4 py-2 cursor-pointer"
                    onClick={() => handleSort("KPIs_2")}
                  >
                    KPIs
                    {sortConfig.key === "KPIs_2" && (
                      <i
                        className={`ml-2 ${
                          sortConfig.direction === "ascending"
                            ? "ri-arrow-up-s-fill"
                            : "ri-arrow-down-s-fill"
                        }`}
                      ></i>
                    )}
                  </th>
                  <th
                    class="px-4 py-2 cursor-pointer"
                    onClick={() => handleSort("Score_2")}
                  >
                    Score
                    {sortConfig.key === "Score_2" && (
                      <i
                        className={`ml-2 ${
                          sortConfig.direction === "ascending"
                            ? "ri-arrow-up-s-fill"
                            : "ri-arrow-down-s-fill"
                        }`}
                      ></i>
                    )}
                  </th>
                  <th
                    class="px-4 py-2 cursor-pointer"
                    onClick={() => handleSort("Review_2")}
                  >
                    Review{" "}
                    {sortConfig.key === "Review_2" && (
                      <i
                        className={`ml-2 ${
                          sortConfig.direction === "ascending"
                            ? "ri-arrow-up-s-fill"
                            : "ri-arrow-down-s-fill"
                        }`}
                      ></i>
                    )}
                  </th>
                  <th
                    className="px-4 py-2 cursor-pointer"
                    onClick={() => handleSort("Evaluation_2")}
                  >
                    Evaluation Date
                    {sortConfig.key === "Evaluation_2" && (
                      <i
                        className={`ml-2 ${
                          sortConfig.direction === "ascending"
                            ? "ri-arrow-up-s-fill"
                            : "ri-arrow-down-s-fill"
                        }`}
                      ></i>
                    )}
                  </th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {dataSectionTwo.map((row) => (
                  <tr key={row.KPIs_2} className="hover:bg-gray-50">
                    <td className=" px-4 py-2 w-2/5">{row.KPIs_2}</td>
                    <td
                      className={`px-4 py-2 w-36 ${
                        row.Score_2 === "30%"
                          ? "text-yellow-500"
                          : row.Score_2 === "5%"
                          ? "text-red-500"
                          : "text-gray-900"
                      }`}
                    >
                      {row.Score_2}
                    </td>
                    <td
                      className={`px-4 py-2 w-44 ${
                        row.Review_2 === "Adequate"
                          ? "text-yellow-500"
                          : row.Review_2 === "Need help"
                          ? "text-red-500"
                          : "text-gray-900"
                      }`}
                    >
                      {row.Review_2}
                    </td>
                    <td className="px-4 py-2 ">{row.Evaluation_2}</td>
                    <td className="w-56">
                        <button className="bg-[#4F46E5] text-white px-3 py-2 w-36 rounded-xl"><i class="ri-add-line"></i> Add Feedback</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="container mx-auto px-4">
              <p className="text-3xl mt-10">Team player attributes</p>
            </div>
            <table
              id="myTable"
              class="min-w-full border-collapse text-left text-sm text-gray-500 mt-10"
            >
              <thead className="text-gray-700">
                <tr className="border-b">
                  <th
                    className="px-4 py-2 cursor-pointer"
                    onClick={() => handleSort("KPIs_3")}
                  >
                    KPIs
                    {sortConfig.key === "KPIs_3" && (
                      <i
                        className={`ml-2 ${
                          sortConfig.direction === "ascending"
                            ? "ri-arrow-up-s-fill"
                            : "ri-arrow-down-s-fill"
                        }`}
                      ></i>
                    )}
                  </th>
                  <th
                    class="px-4 py-2 cursor-pointer"
                    onClick={() => handleSort("Score_3")}
                  >
                    Score
                    {sortConfig.key === "Score_3" && (
                      <i
                        className={`ml-2 ${
                          sortConfig.direction === "ascending"
                            ? "ri-arrow-up-s-fill"
                            : "ri-arrow-down-s-fill"
                        }`}
                      ></i>
                    )}
                  </th>
                  <th
                    class="px-4 py-2 cursor-pointer"
                    onClick={() => handleSort("Review_3")}
                  >
                    Review{" "}
                    {sortConfig.key === "Review_3" && (
                      <i
                        className={`ml-2 ${
                          sortConfig.direction === "ascending"
                            ? "ri-arrow-up-s-fill"
                            : "ri-arrow-down-s-fill"
                        }`}
                      ></i>
                    )}
                  </th>
                  <th
                    className="px-4 py-2 cursor-pointer"
                    onClick={() => handleSort("Evaluation_3")}
                  >
                    Evaluation Date
                    {sortConfig.key === "Evaluation_3" && (
                      <i
                        className={`ml-2 ${
                          sortConfig.direction === "ascending"
                            ? "ri-arrow-up-s-fill"
                            : "ri-arrow-down-s-fill"
                        }`}
                      ></i>
                    )}
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataSectionThree.map((row) => (
                  <tr key={row.KPIs_3} className="hover:bg-gray-50">
                    <td className=" px-4 py-2 w-2/5">{row.KPIs_3}</td>
                    <td
                      className={`px-4 py-2 w-24 ${
                        row.Score_3 === "30%"
                          ? "text-yellow-500"
                          : row.Score_3 === "5%"
                          ? "text-red-500"
                          : "text-gray-900"
                      }`}
                    >
                      {row.Score_3}
                    </td>
                    <td
                      className={`px-4 py-2 w-44 ${
                        row.Review_3 === "Adequate"
                          ? "text-yellow-500"
                          : row.Review_3 === "Need help"
                          ? "text-red-500"
                          : "text-gray-900"
                      }`}
                    >
                      {row.Review_3}
                    </td>
                    <td className="px-4 py-2 w-44">{row.Evaluation_3}</td>
                    <td className="w-56">
                        <button className="bg-[#4F46E5] text-white px-3 py-2 w-36 rounded-xl"><i class="ri-add-line"></i> Add Feedback</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center ">
              <button className="bg-[#4F46E5] text-white p-4 rounded-xl mb-7 mt-10">
                Show More
              </button>
            </div>
          </div>
        </div>
    </div>
    </article>
    <div className="flex flex-row gap-4 mb-5">
        <div className="bg-white p-6 border rounded-lg shadow-md w-6/12">
          <p className="text-2xl text-center">Hello, Colin</p>
          <p className="text-xl text-center font-light mt-4">
            Your current performance score is
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
        <div className="bg-white p-6 border rounded-lg shadow-md w-full">
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
                  <div className="bg-red-500 h-3/4 w-4 rounded-full h-24"></div>
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
    <div className="bg-white p-6 border rounded-lg shadow-md w-full mb-5">
        <div className="flex flex-row justify-between">
            <p className="text-3xl mt-5">Team member</p>
            <Select options={team} placeholder="ทีมจิรยุทธ์" />
        </div>
        
        <div className="flex flex-row justify-between  gap-4 mt-10">
            <div className="flex flex-col justify-center items-center">
                <img src={Andrew} alt="Andrew" width="200" />
                <div className="bg-[#26405D] w-64 h-56 rounded-xl">
                    <p className="text-white text-xl text-center mt-5">Andrew Mayer</p>
                    <p className="text-white text-sm text-center  font-light">Security Manager</p>
                    <p className="text-[#FEB135] text-center text-5xl mt-4">69 (B)</p>
                    <button className="bg-white py-3 px-5 block mx-auto rounded-full mt-5">View Detail</button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={Milton} alt="Milton" width="200" />
                <div className="bg-[#26405D] w-64 h-56 rounded-xl">
                    <p className="text-white text-xl text-center mt-5">Milton Ondricka</p>
                    <p className="text-white text-sm text-center  font-light">Chief Tactics Technician</p>
                    <p className="text-[#FD4444] text-center text-5xl mt-4">15 (D)</p>
                    <button className="bg-white py-3 px-5 block mx-auto rounded-full mt-5">View Detail</button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={Lisa} alt="Lisa" width="200" />
                <div className="bg-[#26405D] w-64 h-56 rounded-xl">
                    <p className="text-white text-xl text-center mt-5">Lisa Rau</p>
                    <p className="text-white text-sm text-center  font-light">Future Division Representative</p>
                    <p className="text-[#3AA94F] text-center text-5xl mt-4">94 (A)</p>
                    <button className="bg-white py-3 px-5 block mx-auto rounded-full mt-5">View Detail</button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={Lena} alt="Lisa" width="200" className="relative top-6"/>
                <div className="bg-[#26405D] w-64 h-56 rounded-xl mt-5">
                    <p className="text-white text-xl text-center mt-5">Lena Runte</p>
                    <p className="text-white text-sm text-center  font-light">Chief Applications Engineer</p>
                    <p className="text-[#FD4444] text-center text-5xl mt-4">47 (C)</p>
                    <button className="bg-white py-3 px-5 block mx-auto rounded-full mt-5">View Detail</button>
                </div>
            </div>
        </div>
    </div>
    <div className="bg-white p-6 border rounded-lg shadow-md w-full mb-5">
        <p className="text-xl font-semibold mt-5">ความคิดเห็น / สิ่งที่ต้องปรับปรุง</p>
        <p className="text-xl mt-5">Team management and mentoring</p>
        <p className="text-xl mt-3">Leadership Management</p>
        <table
              id="myTable"
              class="min-w-full border-collapse text-left text-sm text-gray-500 mt-10"
            >
              <thead className="text-gray-700">
                <tr className="border-b">
                  <th
                    className="px-4 py-2 cursor-pointer"
                    onClick={() => handleSort("KPIs_4")}
                  >
                    KPIs
                    {sortConfig.key === "KPIs_4" && (
                      <i
                        className={`ml-2 ${
                          sortConfig.direction === "ascending"
                            ? "ri-arrow-up-s-fill"
                            : "ri-arrow-down-s-fill"
                        }`}
                      ></i>
                    )}
                  </th>
                  <th
                    class="px-4 py-2 cursor-pointer"
                    onClick={() => handleSort("comment")}
                  >
                    สิ่งที่ต้องปรับปรุง
                    {sortConfig.key === "comment" && (
                      <i
                        className={`ml-2 ${
                          sortConfig.direction === "ascending"
                            ? "ri-arrow-up-s-fill"
                            : "ri-arrow-down-s-fill"
                        }`}
                      ></i>
                    )}
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataSectionFourth.map((row) => (
                  <tr key={row.KPIs_4} className="hover:bg-gray-50">
                    <td className=" px-4 py-2">{row.KPIs_4}</td>
                    <td className=" px-4"
                    >
                      {row.comment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-2/4 p-6 shadow-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-xl font-semibold text-gray-800">Feedback for manager</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="mt-4">
              <p className="text-gray-600 mb-4 font-semibold">
                Category: <span className="font-light"> Leadership Management</span>
              </p>
              <p className="text-gray-600 mb-4 font-semibold">
                Sub Category: <span className="font-light"> Demonstrate Leadership with client</span>
              </p>
              <p className="text-gray-600 mb-4 font-semibold">Feedback</p>
              <textarea
                rows="5"
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Input your feedback to employee"
              ></textarea>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamKPI;
