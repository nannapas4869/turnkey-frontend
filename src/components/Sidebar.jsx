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
  const SidebarContext = createContext();
  
  
  export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);
    const [activeItem, setActiveItem] = useState(null);
    return (
      <>
        <aside className="flex min-h-screen">
          <nav className="min-h-screen flex flex-col bg-white border-r shadow-sm">
            <div className="p-4 pe-8 pb-2 flex justify-between items-center">
              <img
                src={logo}
                className={`overflow-hidden transition-all ${
                  expanded ? "w-10" : "w-0"
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
                <MoreVertical size={20} />
              </div>
            </div>
          </nav>
        </aside>
      </>
    );
  }

export function SidebarItem({ icon, text, alert, to }) {
    const { expanded } = useContext(SidebarContext);
    const navigate = useNavigate();
    const location = useLocation();

    const active =
      location.pathname === to 
    useEffect(() => {
      function handleClickOutside(event) {
        if (submenuRef.current && !submenuRef.current.contains(event.target)) {
          setSubmenuOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
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
  