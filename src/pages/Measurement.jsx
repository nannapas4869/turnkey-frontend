import AM from "../assets/images/am.png";
import LR from "../assets/images/LR.png";
import LR2 from "../assets/images/LR2.png";
import MO from "../assets/images/mo.png";
import OK from "../assets/images/ok.png";
import OLGA from "../assets/images/olga.png";
import ONDRICKA from "../assets/images/ondricka.png";
import Rau from "../assets/images/Rau.png";
import runte from "../assets/images/runte.png";
import Mayer from "../assets/images/Mayer.png";
import { Link } from "react-router-dom";
import Andrew from "../assets/images/Andrew.png";
import Milton from "../assets/images/milton.png";
import Lisa from "../assets/images/lisa.png";
import Ola from "../assets/images/Ola.png";
const Measurement = () => {
  return (
    <>
      <h1>Select the employee you want to evaluate</h1>
      <article id="page1" className="bg-white w-full  mt-5 mb-5 rounded-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="container flex flex-row justify-between">
            <p className="text-xl">Employee List</p>
            <input
              type="date"
              name="date"
              className="border p-3  rounded"
              id="date"
              placeholder="Date Expire"
            />
          </div>

          <div className="container mx-auto px-4">
            <p className="text-xl mt-5">Waiting for evaluation</p>
            <div className="flex flex-row justify-between mt-5 gap-2">
                <Link to="/Measurement_2">
                <div
                className="flex flex-col  border-2  border-gray-500 rounded-lg w-72 h-fit
                   px-6"
              >
                <img src={Andrew} alt="AM" className="flex justify-center relative top-6" />
                <div
                  className="rounded-md bg-[#26405D] w-72 h-56
                    relative-style "
                >
                  <p className="text-2xl font-semibold text-white text-center mt-5">
                    Andrew Mayer
                  </p>
                  <p className="text-lg font-light text-white text-center mt-3">
                    Assistant RF Manager
                  </p>
                  <p className="text-lg font-light text-white text-center mt-3">
                    (RF Division)
                  </p>
                  <p className="text-2xl text-center mb-5 text-red-500 font-light relative top-10">
                    Exp. 03/01/2025
                  </p>
                </div>
              </div>
                </Link>
              <div
                className="flex flex-col  border-2  border-gray-500 rounded-lg w-72 h-fit
                   px-6"
              >
                <img src={Milton} width="231" alt="AM" className="flex justify-center  relative top-6" />
                <div
                  className="rounded-md bg-[#26405D] w-72 h-56 relative-style "
                >
                  <p className="text-2xl font-semibold text-white text-center mt-5">
                    Milton Ondricka
                  </p>
                  <p className="text-sm font-light text-white text-center mt-3">
                    Software Developer Specialist LV5
                  </p>
                  <p className="text-sm font-light text-white text-center mt-3">
                    (Research & Development Section)
                  </p>
                  <p className="text-sm font-light text-white text-center mt-3 mb-22">
                    (RF Division)
                  </p>
                  <p className="text-2xl text-center  text-yellow-500 font-light relative top-7">
                    Exp. 10/01/2025
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col  border-2  border-gray-500 rounded-lg w-72 h-fit
                   px-6"
              >
                <img src={Lisa} alt="AM" className="flex justify-center  relative top-6" />
                <div
                  className="rounded-md bg-[#26405D] w-72 h-56
                    relative-style "
                >
                  <p className="text-2xl font-semibold text-white text-center mt-5">
                  Lisa Rau
                  </p>
                  <p className="text-lg font-light text-white text-center mt-3">
                  Accounting Officer (AP)
                  </p>
                  <p className="text-lg font-light text-white text-center mt-3">
                  (Research & Development Section)
                  </p>
                  <p className="text-2xl text-center mb-5 text-green-500 font-light relative top-2">
                  Exp. 15/01/2025
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col  border-2  border-gray-500 rounded-lg w-72 h-fit
                   px-6"
              >
                <img src={Ola} alt="AM" className="flex justify-center  relative top-8" />
                <div
                  className="rounded-md bg-[#26405D] w-72 h-56
                    relative-style "
                >
                  <p className="text-2xl font-semibold text-white text-center mt-5">
                  Lena Runte
                  </p>
                  <p className="text-lg font-light text-white text-center mt-3">
                  Accounting Officer (AP)
                  </p>
                  <p className="text-lg font-light text-white text-center mt-3">
                  (Research & Development Section)
                  </p>
                  <p className="text-2xl text-center mb-5 text-red-500 font-light relative top-2 ">
                  Exp. 15/01/2025
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-xl mt-5">Expired evaluation</p>
            <div className="flex flex-row justify-between mt-5 gap-2">
              <div
                className="flex flex-col  border-2  border-gray-500 rounded-lg w-72 h-fit
                   px-6"
              >
                <img src={Andrew} alt="AM" className="flex justify-center relative top-6 grayscale w-full " />
                <div
                  className="rounded-md bg-[#26405D] w-72 h-56
                    relative-style "
                >
                  <p className="text-2xl font-semibold text-white text-center mt-5">
                    Andrew Mayer
                  </p>
                  <p className="text-lg font-light text-white text-center mt-3">
                    Assistant RF Manager
                  </p>
                  <p className="text-lg font-light text-white text-center mt-3">
                    (RF Division)
                  </p>
                  <p className="text-xl text-center mb-5 text-red-500 font-light relative top-10">
                    The evaluation is overdue
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col  border-2  border-gray-500 rounded-lg w-72 h-fit
                   px-6"
              >
                <img src={Milton} width="231" alt="AM" className="flex justify-center  relative top-6 grayscale w-full" />
                <div
                  className="rounded-md bg-[#26405D] w-72 h-56 relative-style "
                >
                  <p className="text-2xl font-semibold text-white text-center mt-5">
                    Milton Ondricka
                  </p>
                  <p className="text-sm font-light text-white text-center mt-3">
                    Software Developer Specialist LV5
                  </p>
                  <p className="text-sm font-light text-white text-center mt-3">
                    (Research & Development Section)
                  </p>
                  <p className="text-sm font-light text-white text-center mt-3 mb-22">
                    (RF Division)
                  </p>
                  <p className="text-xl text-center  text-red-500 font-light relative top-7">
                  The evaluation is overdue
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col  border-2  border-gray-500 rounded-lg w-72 h-fit
                   px-6"
              >
                <img src={Lisa} alt="AM" className="flex justify-center  relative top-6 grayscale w-full" />
                <div
                  className="rounded-md bg-[#26405D] w-72 h-56
                    relative-style "
                >
                  <p className="text-2xl font-semibold text-white text-center mt-5">
                  Lisa Rau
                  </p>
                  <p className="text-lg font-light text-white text-center mt-3">
                  Accounting Officer (AP)
                  </p>
                  <p className="text-lg font-light text-white text-center mt-3">
                  (Research & Development Section)
                  </p>
                  <p className="text-xl text-center mb-5 text-red-500 font-light relative top-2">
                  The evaluation is overdue
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col  border-2  border-gray-500 rounded-lg w-72 h-fit
                   px-6"
              >
                <img src={Ola} alt="AM" className="flex justify-center  relative top-8 grayscale w-full" />
                <div
                  className="rounded-md bg-[#26405D] w-72 h-56
                    relative-style "
                >
                  <p className="text-2xl font-semibold text-white text-center mt-5">
                  Lena Runte
                  </p>
                  <p className="text-lg font-light text-white text-center mt-3">
                  Accounting Officer (AP)
                  </p>
                  <p className="text-lg font-light text-white text-center mt-3">
                  (Research & Development Section)
                  </p>
                  <p className="text-xl text-center mb-5 text-red-500 font-light relative top-2 ">
                  The evaluation is overdue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Measurement;
