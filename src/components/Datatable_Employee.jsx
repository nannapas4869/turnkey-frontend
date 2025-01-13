import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import Deadline from "../pages/Deadline"
const DataTable_Employee = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formValues, setFormValues] = useState({
    departmentName: "",
    departmentId: "",
    targets: "",
    manager: null,
  });
  const [rows, setRows] = useState([{ id: 1, value: "" }]);
  const navigate = useNavigate();

  const headers = [
    "No.",
    "Employee Name",
    "Employee ID.",
    "Position",
    "Department",
    "Status",
    "Action",
  ];
  const data = [
    [
      1,
      "Kristi Christiansen",
      "00001",
      "Full Stack Developer",
      "IT",
      <button className="bg-active">
        <i className="ri-circle-fill bg-circle-inactive"></i> Inactive
      </button>,
      <Link to="/AssignEmployee"><button className="bg-[#4F46E5] text-white py-4 px-6 rounded-full">Assign</button></Link>,
    ],
    [
      2,
      "Lynn Brown",
      "00002",
      "Senior Sales",
      "IT",
      <button className="bg-active">
        <i className="ri-circle-fill bg-circle-active"></i> Active
      </button>,
      <Link to="/AssignEmployee"><button className="bg-[#4F46E5] text-white py-4 px-6 rounded-full">Assign</button></Link>,
    ],
  ];

  const itemsPerPageOptions = [5, 10, 20, 50, 100];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]); // Default to 5 items per page

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageData = data.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle Select All
  const handleSelectAll = (isChecked) => {
    if (isChecked) {
      setSelectedRows(data.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  // Handle Row Selection
  const handleRowSelection = (index, isChecked) => {
    if (isChecked) {
      setSelectedRows((prev) => [...prev, index]);
    } else {
      setSelectedRows((prev) => prev.filter((i) => i !== index));
    }
  };

  const isFormValid =
    formValues.departmentName.trim() !== "" &&
    formValues.departmentId.trim() !== "" &&
    formValues.targets.trim() !== "";


const TableWithSubmitButton = ({ data }) => {
  const [isAnyRowHighlighted, setIsAnyRowHighlighted] = useState(false);

  const handleRowHighlightCheck = () => {
    // Check if any row has the yellow background condition
    const isHighlighted = data.some((row) => row.includes("yellow"));
    setIsAnyRowHighlighted(isHighlighted);
  };
}
const [selectedValues, setSelectedValues] = useState({
  category: null,
  subCategory: null,
  kpis: [],
});
const isAllSelected =
    selectedValues.category !== "" &&
    selectedValues.subCategory !== "" &&
    selectedValues.kpis.length > 0;
  
  return (
    <div className="overflow-x-auto mb-5">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="border-b border-gray-500 bg-white w-12 px-4 py-2">
              <input
                type="checkbox"
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
            </th>
            {headers.map((header, index) => (
              <th
                key={index}
                className="border-b border-gray-500 bg-white px-4 py-2 text-left text-gray-600"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
      className={`${
       
       rowIndex % 2 === 0
          ? "bg-white"
          : "bg-gray-50"
      }`}
            >
              <td className="px-4 py-2">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(rowIndex)}
                  onChange={(e) =>
                    handleRowSelection(rowIndex, e.target.checked)
                  }
                />
              </td>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2 text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-row justify-start items-center">
        <p className="w-40">Total {totalPages} Pages</p>
        <Select
          className="basic-single w-24 mt-10 mb-10"
          classNamePrefix="select"
          menuPlacement="top"
          defaultValue={""}
          name="page"
          options={itemsPerPageOptions.map((value) => ({
            value,
            label: value,
          }))}
          placeholder={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.value))}
        />
        <div className="w-full">
          <div className="flex flex-row gap-3 justify-center">
            <i
              className="ri-skip-left-line arrow__size"
              onClick={() => handlePageChange(1)}
            ></i>
            <i
              className="ri-arrow-left-s-line arrow__size"
              onClick={() => handlePageChange(currentPage - 1)}
            ></i>
            {Array.from({ length: totalPages }, (_, i) => (
              <p
                key={i}
                className={`number__size ${
                  currentPage === i + 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </p>
            ))}
            <i
              className="ri-arrow-right-s-line arrow__size"
              onClick={() => handlePageChange(currentPage + 1)}
            ></i>
            <i
              className="ri-skip-right-line arrow__size"
              onClick={() => handlePageChange(totalPages)}
            ></i>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-10">
        <div className="flex justify-end mt-10 ">
          <Link to="/Deadline">
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
  );
};

export default DataTable_Employee;
