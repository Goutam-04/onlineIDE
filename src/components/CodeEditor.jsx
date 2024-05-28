"use client";

import React, { useState, useEffect } from "react";

import { FaExpand, FaRegCopy } from "react-icons/fa";
import Terminal from "./Terminal";
import { Editor } from "@monaco-editor/react";
import { ThemeDropdown } from "./Dropdown";
import { defineTheme } from "../lib/defineTheme";
import copy from "copy-to-clipboard";
import Stopwatch from "./Stopwatch";
import Image from "next/image";

import socket from "@/socket/socket.js";

const CodeEditor = () => {
  const snippet = `#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n\tcout << "Hello, World!";\n\treturn 0;\n}`;

  const [code, setCode] = useState(snippet);
  const [theme, setTheme] = useState("blackboard");
  const [language, setLanguage] = useState("cpp");
  const [fontSize, setFontSize] = useState(16);

  let counter=0;

  const handleEditorChange = (value) => {
    setCode(value);
    onChange("code", value);
  };

  const handleSubmit = async () => {
    counter=0;
    const codeVariable = code;

    await fetch("http://localhost:9000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: codeVariable }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setTimeout(() => {
      socket.emit("terminal:write", "clear; g++ ant.cpp; ./a.exe\r\n");
    }, 500);

    //to write ctrl+c=\x03 for infinite loop case and \r\n for entr
    setTimeout(() => {
      socket.emit("terminal:write", "\x03\r\n");
    }, 180000);
  };

  function loadTheme() {
    let th = { label: "Blackboard", value: "blackboard", key: "blackboard" };
    // if (localStorage.getItem("usertheme")) {
    //   console.log("update theme from local storage");
    //   th = JSON.parse(localStorage.getItem("usertheme"));
    // }
    return th;
  }

  async function handleThemeChange(th) {
    const theme = th;

    console.log(theme);
    console.log("calling define theme ");
    defineTheme(theme.value).then(() => {
      setTheme(theme);
      // localStorage.setItem("usertheme", JSON.stringify(theme));
    });
  }

  useEffect(() => {
    const initialTheme = loadTheme();
    setTheme(initialTheme);
    defineTheme(initialTheme.value);
  }, []);

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const resetCode = () => {
    let text = "The code will be reset to default";
    if (window.confirm(text)) {
      setCode(snippet);
    }
  };

  const saveFile = (data) => {
    const element = document.createElement("a");
    const file = new Blob([data], { type: "text/plain" });
    const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    const defaultFilename = `${language.value}-code-${timestamp}.cpp`;

    // Prompt the user for input to change the filename
    const userInput = window.prompt(
      "Please enter a filename:",
      defaultFilename
    );
    if (!userInput) {
      // If user cancels the prompt, exit function
      return;
    }

    const filename = userInput.endsWith(".cpp")
      ? userInput
      : `${userInput}.cpp`;

    element.href = URL.createObjectURL(file);

    element.download = filename;
    document.body.appendChild(element);
    element.click();
  };

  const copyCode = () => {
    copy(code);
    showSuccessToast("✓ Copied to Clipboard");
  };

  const showSuccessToast = (message) => {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.style.display = "block";

    // Hide the toast after a delay
    setTimeout(() => {
      toast.style.display = "none";
    }, 3000); // Adjust the delay as needed (in milliseconds)
  };

  return (
    <>


    
    {/* -------------------------------- toast  FOR COPY-----------------------*/}

      <div id="toast" className="fixed hidden top-20 right-4 z-20 bg-orange-500 text-white px-4 py-2 rounded-md shadow-lg transition duration-300 ease-in-out"></div>
      
      

      {/* ----------------------------------ACTUAL EDITOR CODE STARTS FORM HERE------------------------- */}
      
      
      
      <div className="h-2 w-full bg-sky-950 border-r-2 border-l-2 border-t-2 border-slate-100"></div>
      <div>
        <div className="flex flex-row border-2 border-t-0 border-slate-100 bg-sky-950 gap-4 ">
        <div className="logo flex justify-start items-center ml-12 mb-2">
      <Image src="/logo.png" alt="Logo" width={30} height={30} />
    </div>
          <div className="dropdownInner ml-20   text center">
            <ThemeDropdown
              handleThemeChange={handleThemeChange}
              theme={theme}
            />
          </div>
          <div className="px-4 justify-end">
            <div className="d-flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              <label
                htmlFor="fontsize_lable"
                className="form-label mr-2 text-gray-100"
              >
                Font Size
              </label>
              <input
                type="number"
                className="form-control px-3 py-1 text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-center custom-number-input"
                id="fontsize_lable"
                placeholder="Font size"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                style={{
                  width: "40px",
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
              onClick={copyCode}
              type="button"
              id="copytxt"
              className="flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <FaRegCopy fontSize={18} color="white" />
            </button>
            <button
              onClick={handleFullScreen}
              type="button"
              className="flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mr-10"
            >
              <FaExpand fontSize={16} color="white" />
            </button>

            <button
              onClick={handleSubmit}
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
            >
              Run
            </button>

            <button
              onClick={saveFile}
              type="button"
              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
            >
              Save
            </button>

            <button
              onClick={resetCode}
              type="button"
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="editorlayout flex flex-row  space-x-4 items-start border-2 border-t-0 border-b-0 border-slate-100 bg-sky-950">
          <div className="flex flex-col h-full justify-start items-end container__left">
            <div className="overlay mt-1 overflow-hidden w-full h-full shadow-4xl">
              <Editor
                options={{ fontSize: fontSize }}
                height={"90vh"}
                width={`60vw`}
                language={language}
                value={code}
                theme={theme.value}
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
            className="flex  flex-col container__right relative overflow-hidden border-slate-100 bg-sky-950 border-2 border-t-0 h-full px-1 pt-1"
            style={{ flex: "1 1 0%" }}
          >
            <Terminal counter={counter} />
            <div className="flex flex-col items-center p-4 pt-0 border-t-2  border-slate-100">
              <Stopwatch/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeEditor;
