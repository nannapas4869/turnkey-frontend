import React, { useState, useEffect } from "react";
import "../index.css";
import SearchBar_Employee from "../components/SearchBar_employee";
import { Link } from "react-router-dom";
import DataTable_Employees from "../components/Datable__Employees";
import Select from "react-select";

const headers = [
  "No.",
  "Employee Name",
  "Employee ID.",
  "Position",
  "Department",
  "Status",
  "Action",
];

const data1 = [
  [
    1,
    "Kristi Christiansen",
    "00001",
    "Full Stack Developer",
    "IT",
    <button className="bg-active">
      <i className="ri-circle-fill bg-circle-inactive"></i> Inactive
    </button>,
    <Link to="/AssignEmployee">
      <button className="bg-[#4F46E5] text-white rounded-full py-4 px-6">
        Assign
      </button>
    </Link>,
  ],
  [
    2,
    "Lynn Brown",
    "00002",
    "Senior Sales",
    "Sales",
    <button className="bg-active">
      <i className="ri-circle-fill bg-circle-active"></i> Active
    </button>,
    <Link to="/AssignEmployee">
      <button className="bg-[#4F46E5] text-white rounded-full py-4 px-6">
        Assign
      </button>
    </Link>,
  ],
];

const options = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

const AssignedEmployee = () => {
  const [categories, setCategories] = useState([]);
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  const handleAddCategory = () => {
    setCategories((prev) => [
      ...prev,
      {
        id: prev.length,
        selectedValues: {
          category: null,
          subCategory: null,
          kpis: [],
        },
      },
    ]);
  };

  const handleRemoveCategory = (id) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
  };

  const handleSelectChange = (id, fieldName, selectedOption) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id
          ? {
              ...cat,
              selectedValues: {
                ...cat.selectedValues,
                [fieldName]: Array.isArray(selectedOption)
                  ? selectedOption.map((opt) => opt.value)
                  : selectedOption?.value || null,
              },
            }
          : cat
      )
    );
  };

  useEffect(() => {
    const isValid =
      categories.length > 0 &&
      categories.every((cat) => {
        const { category, subCategory, kpis } = cat.selectedValues;
        return category && subCategory && kpis.length > 0;
      });

    setIsNextEnabled(isValid);
  }, [categories]);

  return (
    <div className="mb-5">
      <article id="page1" className="bg-white w-full mt-5">
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
              <div className="h-px border__color__purple -ml-10 -mr-10 w-44 z-0"></div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 purple__color rounded-full z-10 bg-white">
                  <span className="text-3xl purple__text">2</span>
                </div>
                <span className="gray__text relative top-2">Select Employees</span>
              </div>
              <div className="h-px border__color__gray -ml-10 -mr-10 w-44 z-0"></div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 gray__color rounded-full z-10 bg-white">
                  <span className="text-3xl gray__text">3</span>
                </div>
                <span className="gray__text relative top-2">Set Objectives</span>
              </div>
              <div className="h-px border__color__gray -ml-10 -mr-10 w-44 z-0"></div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 gray__color rounded-full z-10 bg-white">
                  <span className="text-3xl gray__text">4</span>
                </div>
                <span className="gray__text relative top-2">Preview & Confirm</span>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <h1 className="mt-16">Select Employees</h1>
            <p className="subtext__color">
              Choose employees to assign the selected KPIs.
            </p>
            <SearchBar_Employee />
            <div className="mt-10"></div>
            <DataTable_Employees headers={headers} data={data1} />
          </div>
        </div>
      </article>
    </div>
  );
};

export default AssignedEmployee;
