// src/pages/Login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginImg from "../assets/images/login_image.png";
import TKCBIG from "../assets/images/tkc_logo_big.png";
import "../index.css";
import "remixicon/fonts/remixicon.css";
import Switch from "../components/Switch";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate('/individual'); 
  };

  const input_style = {
    backgroundColor: "white",
  };

  return (
    <>
      <div className="flex flex-row h-screen" style={input_style}>
        <img src={LoginImg} alt="logo_img" className="h-full object-cover" />

        <div className="flex flex-col items-center w-full mt-12">
          <img src={TKCBIG} alt="tkcbig" />
          <h1 className="text-4xl text-[#4F46E5]">Welcome to Turnkey</h1>

          <div className="flex flex-col w-full mt-8">
            <div className="container mx-auto p-4">
              <div className="flex flex-row w-full">
                <div className="basis-4/12"></div>

                {/*  The second column */}
                <div className="basis-full">
                  <label
                    htmlFor="username"
                    className="block text-xl font-medium text-gray-900"
                  >
                    Username
                  </label>

                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter your username"
                      className="
                          border-0 
                          border-b-2
                          border-gray-300
                          focus:outline-none 
                          px-3 py-2 text-xl
                          w-4/6
                        "
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full mt-8">
                <div className="basis-4/12"></div>

                {/*  The second column */}
                <div className="basis-full">
                  <label
                    htmlFor="password"
                    className="block text-xl font-medium text-gray-900"
                  >
                    Password
                  </label>

                  <div className="mt-2 relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      className="
                          border-0 
                          border-b-2
                          border-gray-300
                          focus:outline-none 
                          px-3 py-2 text-xl
                          w-4/6
                        "
                    />
                    <i className="ri-eye-close-line text-2xl text-[#4F46E5] relative right-10"></i>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="basis-3/12"></div>
                <div className="basis-1/12 mt-10">
                  <Switch />
                </div>
                <div className="basis-3/12 mt-11 text-xl">Remember Me</div>
                <div className="basis-5/12 mt-11 text-xl text-red-500">
                  Forget Password?
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-8">
              <div className="container mx-auto p-4">
                <div className="flex flex-row w-full">
                  <div className="basis-4/12"></div>

                  {/*  The second column */}
                  <div className="basis-full">
                    <button onClick={handleSubmit} className="w-4/6 bg-[#4F46E5] py-4 rounded-md text-white">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
