import React, { useState, useEffect } from "react";
import EditorHeader from "./EditorHeader";
import MonacoEditorBox from "./MonacoEditorBox";
import TerminalSection from "./TerminalSection";
import { defineTheme } from "../lib/defineTheme";
import { useResponsiveEditor } from "./useResponsiveEditor";
import copy from "copy-to-clipboard";
import socket from "../socket/socket";
import FloatingChatbot from "./FloatingChatbot";


const CodeEditor = () => {
  const snippet = `#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n\tcout << "Hello, World!"<<endl;\n\treturn 0;\n}`;
  const [code, setCode] = useState(snippet);
  const [theme, setTheme] = useState("blackboard");
  const [language, setLanguage] = useState("cpp");
  // const [counter] = useState(0);
  const { editorWidth, editorHeight, fontSize, setFontSize } = useResponsiveEditor();

  const handleEditorChange = (value) => setCode(value);

  const handleSubmit = async () => {
    showSuccessToast("Please wait for few seconds for first time");
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/submit`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ code }),
});


    setTimeout(() => {
      socket.emit("terminal:write", "clear; g++ ant.cpp; ./a.out\r\n");
    }, 500);

    setTimeout(() => {
      socket.emit("terminal:write", "\x03\r\n");
    }, 180000);
  };

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const resetCode = () => {
    if (window.confirm("The code will be reset to default")) {
      setCode(snippet);
    }
  };

  const copyCode = () => {
    copy(code);
    showSuccessToast("✓ Copied to Clipboard");
  };

  const saveFile = () => {
    const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    const defaultFilename = `cpp-code-${timestamp}.cpp`;
    const userInput = window.prompt("Please enter a filename:", defaultFilename);
    if (!userInput) return;

    const filename = userInput.endsWith(".cpp") ? userInput : `${userInput}.cpp`;
    const blob = new Blob([code], { type: "text/plain" });
    const element = document.createElement("a");
    element.href = URL.createObjectURL(blob);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
  };

  const showSuccessToast = (message) => {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => (toast.style.display = "none"), 3000);
  };

  const loadTheme = () => {
    return { label: "Blackboard", value: "blackboard", key: "blackboard" };
  };

  const handleThemeChange = async (th) => {
    await defineTheme(th.value);
    setTheme(th);
  };

  useEffect(() => {
    const initialTheme = loadTheme();
    setTheme(initialTheme);
    defineTheme(initialTheme.value);
  }, []);

  return (
    <> 
      <div id="toast" className="fixed hidden top-20 right-4 z-20 bg-orange-500 text-white px-4 py-2 rounded-md shadow-lg" />
      
      <EditorHeader
        theme={theme}
        fontSize={fontSize}
        setFontSize={setFontSize}
        handleThemeChange={handleThemeChange}
        handleFullScreen={handleFullScreen}
        handleSubmit={handleSubmit}
        copyCode={copyCode}
        saveFile={saveFile}
        resetCode={resetCode}
      />
      <div className="editorlayout flex flex-col lg:flex-row lg:space-x-4 items-start border-2 border-t-0 border-b-0 border-slate-100 bg-sky-950">
        <div className="flex flex-col h-full justify-start items-end container__left">
          <div className="overlay mt-1 overflow-hidden w-full h-full shadow-4xl">
            <MonacoEditorBox
              code={code}
              fontSize={fontSize}
              language={language}
              theme={theme}
              onChange={handleEditorChange}
              editorWidth={editorWidth}
              editorHeight={editorHeight}
            />
          </div>
        </div>
        {/* <TerminalSection counter={counter} /> */}
        <TerminalSection/>
        <FloatingChatbot/>
      </div>
    </>
  );
};

export default CodeEditor;
