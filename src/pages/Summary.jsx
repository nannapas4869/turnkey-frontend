import "../index.css";
import React, { useState, useEffect } from "react";
import SearchBar_Employee from "../components/SearchBar_employee";
import { Link, useNavigate } from "react-router-dom";
import DataTable_Employees from "../components/Datable__Employees";
import Select from "react-select";
import { Textarea } from '@headlessui/react';
import G from '../assets/images/g.png';
import L from '../assets/images/L.png';
import K from '../assets/images/k.png';
import R from '../assets/images/R.png';
import CategoryDetail from "./CategoryDetail";
import EmployeeDetail from "./EmployeeDetail";
import check from '../assets/images/Check.png';
const Summary = () => {
    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
      });
        const [instruction, setInstruction] = useState(""); 
      
        const isAllSelected = selectedDate !== "" && instruction.trim() !== "";
        const [isModalVisible, setIsModalVisible] = useState(false);
        const navigate = useNavigate();
      
        const handleSubmit = () => {
          // Show the modal
          setIsModalVisible(true);
      
          // Wait for 3 seconds, then navigate to AssignedEmployee
          setTimeout(() => {
            setIsModalVisible(false); // Hide the modal
            navigate("/AssignedEmployee"); // Navigate to the page
          }, 3000);
        };      
    return (
        <div className="my-5">
      <article id="page1" className="bg-white w-full">
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
              <div className="h-px  border__color__purple -ml-10 -mr-10 w-44 z-0"></div>
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
                <div className="flex justify-center items-center w-20 h-20 purple__color rounded-full z-10 bg-[#4F46E5]">
                  <span className="text-3xl">
                    <i className="ri-check-line text-5xl text-white"></i>
                  </span>
                </div>
                <span className="purple__text relative top-2">
                  Set Objectives
                </span>
              </div>
              <div className="h-px border__color__purple -ml-10 -mr-10 w-44 z-0"></div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 purple__color rounded-full z-10 bg-white">
                  <span className="text-3xl purple__text">4</span>
                </div>
                <span className="purple__text relative top-2">
                  Preview & Confirm
                </span>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <h1 className="mt-16">Summary</h1>
            <table class="border-collapse border-b border-gray-300 text-left w-full">
        <thead>
            <tr>
                <th class="border-b border-gray-300 px-4 py-2 font-medium text-[#6C6C6C]">Category Name</th>
                <th class="border-b border-gray-300 px-4 py-2 font-medium text-[#6C6C6C] text-center">KPIs Assigned Task</th>
                <th class="border-b border-gray-300 px-4 py-2 font-medium text-[#6C6C6C] text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border-b border-gray-300 px-4 py-5 text-[#3AA94F]">Leadership Management</td>
                <td class="border-b border-gray-300 px-4 py-5 text-[#3AA94F] text-center">3 of 3</td>
                <td class="px-4 py-5 text-center"><Link to="/CategoryDetail"><button className="text-white bg-[#4F46E5] px-4 py-3 rounded-full">View Detail</button></Link></td>
            </tr>
            <tr>
                <td class="border-b border-gray-300 px-4 py-5 text-[#FEB135]">Individual behavior</td>
                <td class="border-b border-gray-300 px-4 py-5 text-[#FEB135] text-center">1 of 3</td>
                <td class="border-b border-gray-300 px-4 py-5 text-gray-600 text-center"><button className="text-white bg-[#4F46E5] px-4 py-3 rounded-full">View Detail</button></td>
            </tr>
            <tr>
                <td class="border-b border-gray-300 px-4 py-5 text-[#FD4444]">Project Timeline (Schedule Variance)</td>
                <td class="border-b border-gray-300 px-4 py-5 text-[#FD4444] text-center">0 of 3</td>
                <td class="border-b border-gray-300 px-4 py-5 text-gray-600 text-center"><button className="text-white bg-[#4F46E5] px-4 py-3 rounded-full">View Detail</button></td>
            </tr>
        </tbody>
    </table>
    <div className="mt-7">
        <p className="text-[#FD4444]">* Green means all items have been assigned.</p>
        <p className="text-[#FD4444] mt-3">* Yellow means there are some items that have not been assigned yet.</p>
        <p className="text-[#FD4444] mt-3">* Red means the category has not been assigned yet</p>
        <div className="container mx-auto px-4 py-4">
            <p className="text-xl mb-5">Assign to employee</p>
            <div className="flex flex-row gap-6">
                 <img src={G} alt="G" width="60" />
                 <div className="flex flex-col gap-1">
                    <p className="mt-2">Georgia Russel</p>
                    <p className="text-[#6C6C6C] text-sm font-light">HR Specialist</p>
                 </div>
                 <p className="mt-5 font-light">Assign: 2 Category 7KPIs</p>
                <Link to="/EmployeeDetail"><button className="text-white bg-[#4F46E5] px-4 py-3 rounded-full">View Detail</button></Link>
            </div>
            <div className="flex flex-row gap-6 mt-5">
                 <img src={L} alt="L" width="60" />
                 <div className="flex flex-col gap-1">
                    <p className="mt-2">Lucille Robel &nbsp;&nbsp;</p>
                    <p className="text-[#6C6C6C] text-sm font-light">HR Specialist</p>
                 </div>
                 <p className="mt-5 font-light">Assign: 1 Category 2KPIs</p>
                <Link to=""><button className="text-white bg-[#4F46E5] px-4 py-3 rounded-full">View Detail</button></Link>
            </div>
            <div className="flex flex-row gap-6 mt-5">
                 <img src={K} alt="K" width="60" />
                 <div className="flex flex-col gap-1">
                    <p className="mt-2">Kay Fisher   &nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p className="text-[#6C6C6C] text-sm font-light">HR Specialist</p>
                 </div>
                 <p className="mt-5 font-light">Assign: 1 Category 1KPIs</p>
                <Link to=""><button className="text-white bg-[#4F46E5] px-4 py-3 rounded-full">View Detail</button></Link>
            </div>
            <div className="flex flex-row gap-6 mt-5">
                 <img src={R} alt="R" width="60" />
                 <div className="flex flex-col gap-1">
                    <p className="mt-2">Kay Fisher   &nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p className="text-[#6C6C6C] text-sm font-light">HR Specialist</p>
                 </div>
                 <p className="mt-5 font-light">Assign: 3 Category 7KPIs</p>
                <Link to=""><button className="text-white bg-[#4F46E5] px-4 py-3 rounded-full">View Detail</button></Link>
            </div>
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
                        value="lorem ipsum"
                        onChange={(e) => setInstruction(e.target.value)} 
                        />
            
        </div>
    </div>
    
          </div>
          <div className="container mx-auto px-4 pb-10">
            <div className="flex justify-end mt-10 ">
            <button
                className= "button__style background_blue" 
              
                onClick={handleSubmit} // Trigger the modal and navigation
            >
                Submit
      </button>
            </div>
          </div>
        </div>
      </article>
      {isModalVisible && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-5 rounded-2xl w-5/12">
                  <div className="flex justify-center">
                      <img src={check} alt="check" className="mt-10" width="100"/>
                  </div>
                  <p className="text-3xl font-semibold text-center mt-10">Assign KPIs Success</p>
                </div>
              </div>
            )}
    </div>
    )
};

export default Summary;