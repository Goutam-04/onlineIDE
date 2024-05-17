import CodeEditor from "@/components/CodeEditor";
import Hero from "@/components/Hero";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <div className="plyground flex flex-col max-h-[100vh] m-0 p-0">
    <div className="editor min-h-[60vh]">
      {/* <CodeEditor/> */}
      <Hero/>
    </div>
    <div className="terminal ">
      <Terminal/>
    </div>
    </div>
  );
}
