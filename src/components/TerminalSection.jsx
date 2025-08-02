import Terminal from "./Terminal";
import Stopwatch from "./Stopwatch";

const TerminalSection = () => (
  <div id="terminal" className="flex flex-col relative overflow-hidden border-slate-100 bg-sky-950 border-2 border-t-2 lg:border-t-0 h-full px-1 pt-1">
    <Terminal/>
    <div className="flex flex-col items-center p-4 pt-0 border-t-2 border-slate-100">
      <Stopwatch />
    </div>
  </div>
);

export default TerminalSection;
