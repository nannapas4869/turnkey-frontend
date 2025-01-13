import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Select from "react-select";
import { useState, useEffect } from "react";
import makeAnimated from "react-select/animated";
import check from "../assets/images/Check.png"
const AssignEmployee = () => {
  const options = [
    { value: "sales", label: "Sales" },
    { value: "it", label: "IT" },
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
  const isAllSelected =
    selectedValues.category !== "" &&
    selectedValues.kpis.length > 0;
  const [selectedOptions, setSelectedOptions] = useState([]);
  useEffect(() => {}, [selectedValues]);
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

  let isValid;
  // Compute if the form is valid
  useEffect(() => {
    isValid =
      categories.length > 0 &&
      categories.every((cat) => {
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
  const options2 = [{ value: "Customer Services", label: "Customer Services" }];
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
    <>
      <div className="my-8">
        <article id="page1" className="bg-white  w-full ">
          <div className="container mx-auto">
            <div className="flex justify-start py-10 px-10">
              <Link to="/AssignKpi">
                <p className="text-xl text-[#4F46E5]">
                  <i className="ri-arrow-left-s-line"></i> Back
                </p>
              </Link>
            </div>
          </div>
          
          <div className="container mx-auto px-4">
            <h1 className="mt-16">Select Employees</h1>
            <p className="subtext__color ">
              Choose employees to assign the selected KPIs.
            </p>
            <SearchBar />
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
                    setSelectedValues((prev) => ({
                      ...prev,
                      category: selected,
                    }))
                  }
                />
                <label
                  htmlFor="options"
                  className="block text-xl font-regular text-gray-700 mt-8"
                >
                  Select KPIs
                </label>
                <Select
                  isMulti
                  components={animatedComponents}
                  name="kpis"
                  options={allOptions}
                  value={selectedOptions}
                  className="basic-multi-select mt-3"
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
              categories.map((cat) => (
                <div
                  key={cat.id}
                  className="border rounded-xl w-2/4 h-auto p-4 mb-5"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-xl">Category </p>
                    <button
                      className="text-red-500 text-xl"
                      onClick={() => handleRemoveCategory(cat.id)}
                    >
                      <i className="ri-delete-bin-fill text-red-500"></i> Delete
                      this Category
                    </button>
                  </div>
                  <div className="mt-5">
                    <label
                      htmlFor={`category-${cat.id}`}
                      className="block text-md font-regular text-gray-700 mb-2"
                    ></label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      name={`category-${cat.id}`}
                      value={options.find(
                        (opt) => opt.value === cat.selectedValues.category
                      )}
                      options={options}
                      placeholder="Select Category"
                      onChange={(selected) =>
                        handleSelectChange(cat.id, "category", value)
                      }
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
                      options={[
                        { value: "select-all", label: "Select All" },
                        ...kpi,
                      ]} // Include "Select All"
                      value={
                        cat.selectedValues.kpis.length === kpi.length
                          ? [
                              { value: "select-all", label: "Select All" },
                              ...cat.selectedValues.kpis.map((kpiValue) =>
                                kpi.find((opt) => opt.value === kpiValue)
                              ),
                            ]
                          : cat.selectedValues.kpis.map((kpiValue) =>
                              kpi.find((opt) => opt.value === kpiValue)
                            )
                      }
                      placeholder="Select KPIs"
                      closeMenuOnSelect={false}
                      onChange={(selected) => {
                        if (
                          selected?.some(
                            (option) => option.value === "select-all"
                          )
                        ) {
                          if (cat.selectedValues.kpis.length === kpi.length) {
                            // Deselect all if all options are already selected
                            handleSelectChange(cat.id, "kpis", []);
                          } else {
                            // Select all if not all options are selected
                            handleSelectChange(cat.id, "kpis", kpi);
                          }
                        } else {
                          // Handle regular selection
                          handleSelectChange(
                            cat.id,
                            "kpis",
                            selected?.map((opt) => opt.value) || []
                          );
                        }
                      }}
                      menuPlacement="top"
                    />
                  </div>
                </div>
              ))}

            <div className="relative w-2/4 text-center mt-5">
              <div className="container mx-auto px-4"></div>
              <button
                className="text-xl text-[#4F46E5] font-normal cursor-pointer"
                onClick={handleAddCategory}
              >
                <i className="ri-add-line"></i> Add more Category
              </button>
            </div>
          </div>
          <div className="flex justify-end items-end p-4">
          {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-2xl w-5/12">
            <div className="flex justify-center">
                <img src={check} alt="check" className="mt-10" width="100"/>
            </div>
            <p className="text-3xl font-semibold text-center mt-10">Assign KPIs Success</p>
            <p className="text-xl font-light text-center px-4 mt-7">You've finished assigning KPIs. You can go back to assigning KPIs to others on the Select Employees page.</p>
            <div className="flex justify-center mt-10">
            <Link to="/SelectEmploye">
                <button type="button" className="bg-[#4F46E5] text-white rounded-lg px-5 py-4">Assign more</button>
            </Link>
            </div>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        className={`button__style ${
          isAllSelected ? "background_blue" : "background_gray"
        }`}
        disabled={!isAllSelected}
        onClick={handleSubmit} // Trigger the modal and navigation
      >
        Submit
      </button>
      </div>
        </article>
      </div>
    </>
  );
};

export default AssignEmployee;
