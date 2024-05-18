'use client'

import React, { useState,useEffect } from "react";

import { FaExpand, FaRegCopy } from "react-icons/fa";
import Terminal from "./Terminal";
import { Editor } from "@monaco-editor/react";
import { Calistoga } from "next/font/google";


const CodeEditor = () => {

const [code,setCode] = useState("")

const handleEditorChange = (value) => {
  setCode(value);
  onChange("code", value);
};


const handleSubmit= async ()=>{
  const codeVariable = code;

  await fetch('http://localhost:9000/submit', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({ code: codeVariable }) 
  })
  .then(response => response.json()) 
  .then(data => {
    console.log('Success:', data); 
  })
  .catch(error => {
    console.error('Error:', error); 
  });
  
}


  return (
    <>

    <div>
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
          <div className="d-flex px-2 py-1 rounded-lg border focus:outline-none hover:bg-gray-700 focus:z-10  focus:ring-gray-500 bg-gray-800 border-gray-600 hover:text-white hover:bg-gray-700">
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
           onClick={handleSubmit}
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
      
      </div>
      <div>
        
        


      <div
        className="editorlayout flex flex-row  space-x-4 items-start border-2 border-t-0 border-b-0 border-gray-600"
     
      >
        <div className="flex flex-col h-full justify-start items-end container__left">
         <div className="overlay mt-1 overflow-hidden w-full h-full shadow-4xl"


        >
            <Editor
                // options={Fontoptions}
                height={"100vh"}
                width={`60vw`}
                // language={language || "javascript"}
                value={code}
                // theme={theme}
                autoIndent={true}
                onChange={handleEditorChange}
            />
        </div>
        </div>

        {/* <div className="resizer" id="dragMe">
          <svg
            stroke="currentColor"
            fill="#f1f5f9"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="#f1f5f9"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </div> */}

        <div
          className="flex  flex-col container__right relative h-full px-1 pt-1"
          style={{ flex: "1 1 0%" }}
        >
          

         <Terminal/>
          <div className="flex flex-col items-end">
            {/* <CustomInput
              customInput={customInput}
              setCustomInput={setCustomInput}
            /> */}

           
          </div>
      

       
        </div>
      </div>
      
    </div>
    </>
  );
};

export default CodeEditor;
