import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <div className="plyground flex flex-row">
    <div className="editor min-w-[50vw] min-h-full"></div>
    <div className="terminal ">
      <Terminal/>
    </div>
    </div>
  );
}
