import {
  ChevronDown,
  ChevronUp,
  ChevronFirst,
  ChevronLast,
  MoreVertical,
} from "lucide-react";
import logo from "../assets/images/tkc_logo.png";
import profile from "../assets//images/Profile.png";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Camera from "../assets/images/camera.png";
import Call from "../assets/images/Call.png";
import Mail from "../assets/images/Mail.png";
import Address from "../assets/images/address.png";
const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // ดึงไฟล์ที่อัปโหลด
    if (file) {
      const imageUrl = URL.createObjectURL(file); // แปลงเป็น URL ชั่วคราว
      setProfileImage(imageUrl); // อัปเดตรูปใหม่
    }
  };
  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev); // Toggle modal visibility
  };
  return (
    <>
      <aside className="flex min-h-screen">
        <nav className="min-h-screen flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pe-8 pb-2 flex justify-between items-center">
            <img
              src={logo}
              className={`overflow-hidden transition-all ${
                expanded ? "w-14" : "w-0"
              }`}
            />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">
              {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                  active: activeItem === child.props.text,
                  onClick: () => setActiveItem(child.props.text),
                })
              )}
            </ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            <img src={profile} className="w-10 h-10 rounded-md" />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              } `}
            >
              <div className={`${expanded ? "" : "mt__top___3"}`}>
                <h4 className="font-semibold">Welcome back</h4>
                <span className="text-xs text-gray-600">Colin DuBuque</span>
              </div>
              <MoreVertical
                size={20}
                onClick={handleToggleModal}
                className="cursor-pointer"
              />
            </div>
          </div>
        </nav>
      </aside>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-6/12">
            <h2 className="text-2xl font-semibold mb-4">View Employee</h2>
            <hr />
            <div className="flex flex-row gap-5">
              <div>
                <label htmlFor="imageUpload" className="cursor-pointer">
                  <img
                    src={profileImage || Camera}
                    alt="Camera"
                    className="w-20 h-20 rounded-full object-cover border border-gray-300 mt-10"
                  />
                </label>

                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
              <div>
                <p className="text-xl font-semibold mt-10">Kristi Christiansen</p>
                <p className="text-base font-light ">Full Stack Developer (IT)</p>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <div className="flex flex-row gap-4 mb-5">
                <img src={Call} alt="Call" />
                <p>(+66) 67 4759 548</p>
              </div>
              <div className="flex flex-row gap-4 mb-5">
                <img src={Mail} alt="Mail" />
                <p>Kristi_Christiansen@gmail.com</p>
              </div>
              <div className="flex flex-row gap-4">
                <img src={Address} alt="Address" className="ms-2" />
                <p>73958 Larch Close, New Norbert 35047</p>
              </div>
            </div>
            <div className="flex flex-row justify-end gap-5">
              <button
                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md"
                onClick={handleToggleModal}
              >
                Close
              </button>
              <button className="mt-4 px-4 py-2 bg-[#5175E9] text-white rounded-md">
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function SidebarItem({ icon, text, alert, to }) {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const location = useLocation();

  const active = location.pathname === to;

  return (
    <div className="relative">
      <li
        onClick={() => {
          navigate(to);
        }}
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all whitespace-nowrap ${
            expanded ? "w-auto ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          ></div>
        )}

        {!expanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {text}
          </div>
        )}
      </li>
    </div>
  );
}
