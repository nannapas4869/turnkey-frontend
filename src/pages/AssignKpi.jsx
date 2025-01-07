import SearchBar from "../components/SearchBar";
import "../index.css";
import Select from "react-select";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import makeAnimated from "react-select/animated";
const AssignKpi = () => {
  const options = [
    { value: "Sales", label: "Sales" },
    { value: "IT", label: "IT" },
    { value: "Marketing", label: "Marketing" },
  ];
  const animatedComponents = makeAnimated();

  // State for tracking selected values dynamically
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  const [selectedValues, setSelectedValues] = useState({
    category: null,
    subCategory: null,
    kpis: [],
  });
  const kpi = [

    {
      value: "First Contact Resolution rate",
      label: "First Contact Resolution rate",
    },
    { value: "Average Response Time", label: "Average Response Time" },
    { value: "Customer Effort Score", label: "Customer Effort Score" },
    {
      value: "Most Active Support Agents",
      label: "Most Active Support Agents",
    },
  ];
  const options2 = [{ value: "Customer Services", label: "Customer Services" }];
  // Dynamically handle changes for all select fields


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
    const [selectedOptions, setSelectedOptions] = useState([]);
  useEffect(() => {
  }, [selectedValues]);
  const [selectedOption, setSelectedOption] = useState("standard");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id); // Update the selected option
  };

  const allOptions = [{ value: "select-all", label: "Select All" }, ...kpi];
  
  const handleChange = (selected) => {
    if (selected?.some((option) => option.value === "select-all")) {
      // If "Select All" is chosen, set all options except "Select All"
      setSelectedOptions(kpi);
      setSelectedValues((prev) => ({ ...prev, kpis: kpi }));
    } else {
      // Otherwise, set the selected options
      setSelectedOptions(selected || []);
      setSelectedValues((prev) => ({
        ...prev,
        kpis: selected || [],
      }));
    }
  };

  const [categories, setCategories] = useState([]);

  // ฟังก์ชันเพิ่ม category

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

  // Remove a category
  const handleRemoveCategory = (id) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
  };

  // Update selected values
  
  let isValid
  // Compute if the form is valid
  useEffect(() => {
    isValid = categories.length > 0 && categories.every((cat) => {
      const { category, subCategory, kpis } = cat.selectedValues;
      return category && subCategory && kpis.length > 0;
    });

    setIsNextEnabled(isValid);
  }, [categories]);

  // Handle Next button click
  


  // อัปเดตค่าของ category
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

  // อัปเดตค่าน้ำหนัก (weight)
  const handleWeightChange = (id, value) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id
          ? {
              ...cat,
              selectedValues: { ...cat.selectedValues, weight: value },
            }
          : cat
      )
    );
  };
  useEffect(() => {
    // Load categories from local storage on mount
    const savedCategories = localStorage.getItem("categories");
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }
  }, []);
  
  useEffect(() => {
    // Save categories to local storage whenever it changes
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);
 

  return (
    <>
      <article id="page1" className="bg-white w-full mt-5 mb-5">
        <div className="container mx-auto">
          <div className="flex flex-row justify-center items-center pt-10">
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
                  name="category"
                  value={selectedValues.category}
                  options={options}
                  placeholder="Select Category"
                  onChange={(selected) =>
                    setSelectedValues((prev) => ({ ...prev, category: selected }))
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
                      checked={selectedOption === "standard"}
                      id="standard"
                      type="radio"
                      value=""
                      name="default-radio"
                      onChange={handleOptionChange}
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
                      checked={selectedOption === "custom"}
                      id="custom"
                      type="radio"
                      value=""
                      name="default-radio"
                      onChange={handleOptionChange}
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor="custom"
                      class="ms-4 text-md font-light text-gray-900 dark:text-gray-300"
                    >
                      Custom: Customize KPI Weights to Suit Your Needs.
                    </label>
                  </div>
                </div>
                <div className="mt-10">
                  <div class="form-group">
                    <label
                      htmlFor="name"
                      class="inline-label text-md font-light"
                    >
                      Weights:
                    </label>
                    <input
                      type="text"
                      name="weight"
              
                      onChange={handleInputChange}
                      disabled={selectedOption === "standard"}
                      className="border p-3 w-5/12 rounded"
                    />
                  </div>
                </div>
                <p className="text-md font-light text-red-500 mt-5 mb-5">
                  *Ensure the Total Weight Doesn't Exceed 100%
                </p>
              </div>
            </div>
            <div className="border-b-2 w-2/4"></div>
            <div className="mt-10">
              <label
                htmlFor="options"
                className="block text-xl font-regular text-gray-700 mb-2"
              >
                Sub-Category
              </label>
              <div className="relative w-2/4">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={""}
                  name="subCategory"
                  options={options2}
                  value={selectedValues.subCategory}
                  placeholder="Select Sub-Category"
                  onChange={(selected) =>
                    setSelectedValues((prev) => ({ ...prev, subCategory: selected }))
                  }
                />
              </div>
            </div>
            <div className="mt-10">
              <label className="block text-xl mt-5 mb-5">Select KPIs</label>
              <div className="relative w-2/4">
                <Select
                  isMulti
                  components={animatedComponents}
                  name="kpis"
                  options={allOptions}
                  value={selectedOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Select KPIs"
                  menuPlacement="top"
                  closeMenuOnSelect={false}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="container mx-auto p-4 mt-10">
          {categories.length > 0 &&
            categories.map((cat) =>  (
              <div key={cat.id} className="border rounded-xl w-2/4 h-auto p-4 mb-5">
                <div className="flex justify-between items-center">
                  <p className="text-xl">Category </p>
                  <button
                    className="text-red-500 text-xl"
                    onClick={() => handleRemoveCategory(cat.id)}
                  >
                    <i className="ri-delete-bin-fill text-red-500"></i> Delete this Category
                  </button>
                </div>
                <div className="mt-5">

                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    name={`category-${cat.id}`}
                    value={options.find((opt) => opt.value === cat.selectedValues.category)}
                    options={options}
                    placeholder="Select Category"
                    onChange={(selected) => handleSelectChange(cat.id, "category", value)}
                  />
                </div>
                <div className="mt-5">
                  <p className="font-light">Please select your preferred calculation method.</p>
                  <div className="flex items-center mt-3">
                    <input
                      type="radio"
                      checked={selectedOption === "standard"}
                      id="standard"
                      name={`calculation-${cat.id}`}
                      className="w-4 h-4"
                      onChange={handleOptionChange}
                    />
                    <label
                      htmlFor={`standard-${cat.id}`}
                      className="ms-4 text-md font-light text-gray-900"
                    >
                      Standard: All KPIs have equal weight in the evaluation.
                    </label>
                  </div>
                  <div className="flex items-center mt-5">
                    <input
                      type="radio"
                      checked={selectedOption === "custom"}
                      id="custom"
                      name={`calculation-${cat.id}`}
                      onChange={handleOptionChange}
                      className="w-4 h-4"
                    />
                    <label
                      htmlFor={`custom-${cat.id}`}
                      className="ms-4 text-md font-light text-gray-900"
                    >
                      Custom: Customize KPI Weights to Suit Your Needs.
                    </label>
                  </div>
                  <div className="mt-5">
                    <label
                      htmlFor={`weight-${cat.id}`}
                      className="block text-md font-regular text-gray-700 mb-2"
                    >
                      Weights:
                    </label>
                    <input
                      type="text"
                      id={`weight-${cat.id}`}
                      onChange={(e) => handleInputChange()}
                      className="border p-3 w-full rounded"
                      placeholder="Enter weight"
                      disabled={selectedOption === "standard"}
                    />
                    <p className="text-md font-light text-red-500 mt-2">
                      *Ensure the Total Weight Doesn't Exceed 100%
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor={`subcategory-${cat.id}`}
                    className="block text-md font-regular text-gray-700 mb-2"
                  >
                    Sub-Category
                  </label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    name={`subcategory-${cat.id}`}
                    value={options2.find(
                      (opt) => opt.value === cat.selectedValues.subCategory
                    )}
                    options={options2}
                    placeholder="Select Sub-Category"
                    onChange={(selected) => handleSelectChange(cat.id, "subCategory", selected)}
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor={`kpis-${cat.id}`}
                    className="block text-md font-regular text-gray-700 mb-2"
                  >
                    Select KPIs
                  </label>
                  <Select
                    isMulti
                    components={animatedComponents}
                    name={`kpis-${cat.id}`}
                    options={kpi}
                    value={cat.selectedValues.kpis.map((kpiValue) =>
                      kpi.find((opt) => opt.value === kpiValue)
                    )}
                    placeholder="Select KPIs"
                    closeMenuOnSelect={false}
                    onChange={(selected) => handleSelectChange(cat.id, "kpis", selected)}
                  />
                </div>
              </div>
            ))}



            <div className="relative w-2/4 text-center mt-5">
            <div className="container mx-auto px-4">
</div>
              <button
                className="text-xl text-[#4F46E5] font-normal cursor-pointer"
                onClick={handleAddCategory}
              >
                <i className="ri-add-line"></i> Add more Category
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">


          {/* Loop through categories */}

        </div>


        <div className="flex justify-end items-end p-4">
        <Link to="/selectEmployee">
        <button
          className={`button__style ${isAllSelected ? "background_blue" : "background_gray"}`}
          disabled={!isAllSelected}
        >
          Next
        </button>
        </Link>
      </div>
      </article>



    </>
  );
};

export default AssignKpi;
