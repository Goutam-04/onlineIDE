'use client'

import React from "react";
import CodeEditor from "./CodeEditor";
import { FaExpand, FaCompress, FaRegCopy, FaHome } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition duration-200"></div>

      <div className="flex flex-row border-2 border-t-0 border-gray-600 gap-4">
      

        {/* <div className="dropdownInner">
          <LanguagesDropdown
            onSelectChange={onSelectChange}
            Userlanguage={language}
          />
        </div> */}
        {/* <div className="dropdownInner">
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div> */}
        <div className="px-4 justify-end">
          <div className="d-flex px-2 py-1 rounded-lg border focus:outline-none hover:bg-gray-700 hover:text-blue-700 focus:z-10  focus:ring-gray-500 bg-gray-800 border-gray-600 hover:text-white hover:bg-gray-700">
            <label
              htmlFor="fontsize_lable"
              className="form-label mr-2 text-gray-100"
            >
              Font Size
            </label>
            <input
              type="number"
              className="form-control px-3 py-1  text-gray-700 bg-white  border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="fontsize_lable"
              placeholder="Font size"
              style={{
                width: "80px",
              }}
            />
          </div>
        </div>

        <div
          className="px-4  mx-auto justify-end flex items-center"
          style={{
            flex: 1,
          }}
        >
          <button
         
            type="button"
            id="copytxt"
            className="flex items-center py-2 px-4 mr-3  text-xs font-medium  rounded-lg border focus:outline-none hover:bg-gray-700 hover:text-blue-700 focus:z-10  focus:ring-gray-500 bg-gray-800 border-gray-600 hover:text-white hover:bg-gray-700"
          >
            <FaRegCopy fontSize={18} color="white" />
          </button>
          <button
            
            type="button"
            className="flex items-center py-2 px-4 mr-3 text-xs font-medium  rounded-lg border focus:outline-none hover:bg-gray-700 hover:text-blue-700 focus:z-10  focus:ring-gray-500 bg-gray-800 border-gray-600 hover:text-white hover:bg-gray-700"
          >
            <FaExpand fontSize={16} color="white" />
          </button>

          <button
           
            type="button"
            className="text-white bg-indigo-600 hover:bg-indigo-800   focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center focus:ring-[#2557D6]/50 mr-2"
          >
            
              Run
            
          </button>

          <button
            
            type="button"
            className="text-white bg-indigo-600 hover:bg-indigo-800   focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center focus:ring-[#2557D6]/50 mr-2"
          >
            Save Code
          </button>

          <button
            
            type="button"
            className="text-white bg-indigo-600 hover:bg-indigo-800   focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center focus:ring-[#2557D6]/50 mr-2"
          >
            Erase Code
          </button>
          <button
           
            type="button"
            className="text-white bg-[#db2777] hover:bg-[#ec4899]   focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center focus:ring-[#2557D6]/50 mr-2"
          >
            Share
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
