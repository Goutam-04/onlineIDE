import React from "react";
import { FaExpand, FaRegCopy } from "react-icons/fa";
import { ThemeDropdown } from "./Dropdown";
import { Link } from 'react-router-dom';

const EditorHeader = ({
    theme,
    fontSize,
    setFontSize,
    handleThemeChange,
    handleFullScreen,
    handleSubmit,
    copyCode,
    saveFile,
    resetCode,
}) => (
    <div className="flex flex-row flex-wrap md:flex-nowrap border-2 border-slate-100 bg-sky-950 gap-1 md:gap-4 gap-y-2 md:gap-y-0 p-1">
        <div className="logo flex justify-start items-center ml-12">
            <img src="/logo.png" width={30} height={30} alt="Logo" />
        </div>
        <div className="dropdownInner ml-20 text-center">
            <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
        <div className="hidden lg:flex items-center px-4 w-full md:w-auto">
            <label htmlFor="fontsize_label" className="form-label mr-2 text-gray-100 text-sm md:text-base">
                Font Size
            </label>
            {/* <input
                type="number"
                className="form-control px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded text-center w-12 md:w-16"
                id="fontsize_label"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
            /> */}
            <input
                type="range"
                min="10"
                max="24"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="w-24"
            />

        </div>

        <div
            className="px-4  mx-auto justify-end flex items-center"
            style={{
                flex: 1,
            }}
        >
            <button
                onClick={copyCode}
                type="button"
                id="copytxt"
                className="flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
                <FaRegCopy fontSize={18} color="white" />
            </button>
            <button
                onClick={handleFullScreen}
                type="button"
                className="hidden lg:flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mr-10"
            >
                <FaExpand fontSize={16} color="white" />
            </button>
            <a href="#terminal">

                <button
                    onClick={handleSubmit}
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 transition duration-300 hover:scale-105 hover:shadow-lg"
                >
                    Run
                </button>
            </a>

            <button
                onClick={saveFile}
                type="button"
                className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 transition duration-300 hover:scale-105 hover:shadow-lg"
            >
                Save
            </button>

            <button
                onClick={resetCode}
                type="button"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 transition duration-300 hover:scale-105 hover:shadow-lg"
            >
                Reset
            </button>
        </div>
    </div>
);

export default EditorHeader;
