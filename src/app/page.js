import CodeEditor from "@/components/CodeEditor";
import Hero from "@/components/Hero";
import Terminal from "@/components/Terminal";
import { Editor } from "@monaco-editor/react";

export default function Home() {
  return (
    <div className="plyground flex flex-row max-h-[100vh] m-0 p-0">
    <div className="editor min-w-[60vw]">
      
      <Hero/>
    </div>
    <div className="terminal ">
      <Terminal/>
    </div>
    </div>
  );
}
