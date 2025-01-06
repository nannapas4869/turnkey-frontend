import SearchBar from "../components/SearchBar";
import "../index.css";
import Select from "react-select";
import { useState, useEffect } from "react";
import makeAnimated from "react-select/animated";
const AssignKpi = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const animatedComponents = makeAnimated();

  // State for tracking selected values dynamically
  const [selectedValues, setSelectedValues] = useState({
    category: null,
    subCategory: null,
    kpis: [],
  });

  // Dynamically handle changes for all select fields
  const handleSelectChange = (fieldName, selectedOption) => {
    const value = Array.isArray(selectedOption)
      ? selectedOption.map((opt) => opt.value) // Handle multi-select
      : selectedOption?.value || null; // Handle single select

    setSelectedValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };
  const [formValues, setFormValues] = useState({
    departmentName: "",
    departmentId: "",
    targets: "",
    manager: null,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // Check if all selects are selected
  const isAllSelected =
    selectedValues.category !== "" &&
    selectedValues.subCategory !== "" &&
    selectedValues.kpis.length > 0;

  useEffect(() => {
    console.log("Selected Values:", selectedValues);
    console.log("isAllSelected:", isAllSelected);
  }, [selectedValues]);

  return (
    <>
      <article id="page1" className="bg-white w-full h-full pt-10">
        <div className="container mx-auto p-4">
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-20 h-20 purple__color rounded-full z-10 bg-white">
                <span className="text-3xl purple__text">1</span>
              </div>

              <span className="purple__text relative top-2">Select KPIs</span>
            </div>
            <div className="h-px border__color__gray -ml-10 -mr-10 w-44 z-0"></div>

            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-20 h-20 gray__color rounded-full z-10 bg-white ">
                <span className="text-3xl gray__text">2</span>
              </div>

              <span className="gray__text relative top-2">
                Select Employees
              </span>
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
              <div className="flex justify-center items-center w-20 h-20 gray__color rounded-full z-10 bg-white ">
                <span className="text-3xl gray__text">4</span>
              </div>

              <span className="gray__text relative top-2">
                Preview & Confirm
              </span>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <h1 className="mt-16">Select KPIs</h1>
          <p className="subtext__color">
            Choose the most relevant KPIs from the list to assign to your
            employees.
          </p>
          <SearchBar />
          <div className="container mx-auto px-4">
            <div className="mt-10">
            <label
                htmlFor="options"
                className="block text-xl font-regular text-gray-700 mb-2"
              >
                Category
              </label>
              <div className="relative w-2/4">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={""}
                  name="color"
                  options={options}
                  placeholder="Select Category"
                  onChange={(selectedOption) =>
                    handleSelectChange("category", selectedOption)
                  }
                />
              </div>
              </div>
            <div className="mt-10">
              <div className="container mx-auto px-4">
                <p className="font-light">
                  Please select your preferred calculation method.
                </p>
                <div className="mt-10">
                  <div class="flex items-center mb-4">
                    <input
                      checked
                      id="standard"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
                    />
                    <label
                      for="standard"
                      class="ms-4 text-md font-light text-gray-900 dark:text-gray-300"
                    >
                      Standard: All KPIs have equal weight in the evaluation.
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      for="default-radio-2"
                      class="ms-4 text-md font-light text-gray-900 dark:text-gray-300"
                    >
                      Custom: Customize KPI Weights to Suit Your Needs.
                    </label>
                  </div>
                </div>
                <div className="mt-10">
                  <div class="form-group">
                    <label for="name" class="inline-label text-md font-light">
                      Weights:
                    </label>
                    <input
                      type="text"
                      name="weight"
                      value={formValues.weight}
                      onChange={handleInputChange}
                      className="border p-3 w-5/12 rounded"
                    />
                  </div>
                </div>
                <p className="text-md font-light text-red-500 mt-5 mb-5">*Ensure the Total Weight Doesn't Exceed 100%</p>
              </div>
            </div>
            <div className="border-b-2 w-2/4"></div>
            <div className="mt-10">
              <label className="block text-xl mt-5 mb-5">Sub-Category</label>
              <input
                type="text"
                name="subcategory"
                value={formValues.subcategory}
                onChange={handleInputChange}
                className="border p-3 w-2/4 rounded"
                placeholder="Select Sub - Category"
              />
            </div>
            <div className="mt-10">
              <label className="block text-xl mt-5 mb-5">Select KPIs</label>
              <input
                type="text"
                name="selectkpi"
                value={formValues.selectkpi}
                onChange={handleInputChange}
                className="border p-3 w-2/4 rounded"
                placeholder="Select KPIs"
              />
            </div>
          </div>
          <div className="container mx-auto p-4 mt-10">
            <div className="flex justify-end items-end">
              <a href="/Assign/2" disabled={!isAllSelected}>
                <button
                  className={`button__style ${
                    isAllSelected ? "background_blue" : "background_gray"
                  }`}
                  disabled={!isAllSelected}
                >
                  Next
                </button>
              </a>
            </div>
          </div>
        </div>
      </article>
      <article id="page2"></article>
    </>
  );
};

export default AssignKpi;
