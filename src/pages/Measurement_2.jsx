import Andrew from "../assets/images/Andrew.png";
import { useState } from "react";
const Measurement_2 = () => {
    const [showModal, setShowModal] = useState(false);


    const openModal = () => {
      setShowModal(true);
    };
  

    const closeModal = () => {
      setShowModal(false);
    };
  return (
    <>
      <h1>Measurement</h1>
      <article id="page1" className="bg-white w-full  mt-5 mb-5 rounded-xl">
        <div className="container mx-auto px-4 py-4">
          <p className="text-2xl">Employee profile</p>
          <div className="flex flex-row gap-4">
            <img
              src={Andrew}
              alt="Andrew"
              width="100"
              className="rounded-full border-2 border-solid border-gray-500 mt-10"
            />
            <div className="flex flex-col justify-center mt-8">
              <p className="text-xl font-semibold">Andrew Mayer</p>
              <p className="relative top-2">
                Lorem ipsum dolor sit amet consectetur. Ipsum lorem scelerisque
                mauris at. Ac eu sagittis morbi a. Urna consectetur in tempus
                sed. Elit adipiscing vel eros faucibus turpis turpis vulputate
                mi.
              </p>
            </div>
          </div>
        </div>
        <hr className="border border-solid  border-gray-200" />
        <div className="container mx-auto px-4 mt-5">
          <p className="text-xl font-light">
            Measured KPIs:{" "}
            <span>
              Ability of the developer to understand project requirements.
            </span>
          </p>
          <p className="text-xl font-light mt-5">
            Detail Measured::{" "}
            <span>
              Understand client requirements effectively, request more
              information as needed and document information received in the
              project management system.
            </span>
          </p>
          <div className="flex items-center justify-between">
           
              <div>
                <input
                  type="radio"
                  id="css"
                  name="fav_language"
                  value="CSS"
                  defaultChecked
                  className="mt-10"
                />
                <label htmlFor="" className="ml-2">
                  No Effort
                </label>
              </div>
              <div className="mt-7 cursor-pointer"  onClick={openModal}>
                Conditions <i class="ri-arrow-right-s-line"></i>
              </div>

          </div>
          <hr className="w-full my-4 border-gray-300" />

          <div className="flex items-center justify-between">
            <div>
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <label htmlFor="css" className="ml-2">
                Poor
              </label>
            </div>
            <div className=" cursor-pointer">
                Conditions <i class="ri-arrow-right-s-line"></i>
              </div>
          </div>
          <hr className="w-full my-4 border-gray-300" />
          <div className="flex items-center justify-between">
            <div>
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <label htmlFor="css" className="ml-2">
                Adequate
              </label>
            </div>
            <div className=" cursor-pointer">
                Conditions <i class="ri-arrow-right-s-line"></i>
              </div>
          </div>
          <hr className="w-full my-4 border-gray-300" />
          <div className="flex items-center justify-between">
            <div>
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <label htmlFor="css" className="ml-2">
                Good
              </label>
            </div>
            <div className=" cursor-pointer">
                Conditions <i class="ri-arrow-right-s-line"></i>
              </div>
          </div>
          <hr className="w-full my-4 border-gray-300" />
          <div className="flex items-center justify-between">
            <div>
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <label htmlFor="css" className="ml-2">
                Excellent
              </label>
            </div>
            <div className=" cursor-pointer">
                Conditions <i class="ri-arrow-right-s-line"></i>
              </div>
          </div>
          <hr className="w-full my-4 border-gray-300" />
          <div className="flex flex-row justify-center mt-3 gap-4 pb-20">
            <div className=" flex items-center border-2 border-solid border-[#4F46E5] rounded-md px-4 py-2 bg-[#E4E3FB] "><i class="ri-arrow-left-s-line"></i> Prev</div>
            <p className="flex items-center">1 of 6</p>
            <div className=" flex items-center rounded-md px-4 py-2 bg-[#4F46E5] text-white"> Next <i class="ri-arrow-right-s-line"></i></div>
          </div>
        </div>
        {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeModal}
          />

        
          <div className="bg-white p-6 rounded shadow-lg z-10 w-2/4 mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Evaluation rules and criteria</h2>
            <p className="mb-4">No Effort</p>
            <hr />
            <div className="grid grid-cols-2 mt-6">
                <p>1</p>
                <p>ขาดงาน หรือลางานเกินกำหนดขององค์กร</p>
            </div>
            <hr />
            <div className="grid grid-cols-2 mt-6">
                <p>2</p>
                <p>มาสายอย่างสม่ำเสมอ</p>
            </div>
            <hr />
            <div className="grid grid-cols-2 mt-6">
                <p>3</p>
                <p>ทำงานผิดพลาดบ่อยครั้ง</p>
            </div>
            <hr />
            <div className="grid grid-cols-2 mt-6">
                <p>4</p>
                <p>ไม่สามารถสื่อสารกับเพื่อนร่วมทีมได้</p>
            </div>
            <hr />
            <div className="flex justify-end mt-10">
              <button
                onClick={closeModal}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </article>
    </>
  );
};
export default Measurement_2;
