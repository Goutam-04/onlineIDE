// Terminal.jsx
import { Terminal as Xterminal } from 'xterm';
import 'xterm/css/xterm.css';
import { useEffect, useRef } from 'react';
import socket from '@/socket/socket.js';

const Terminal = () => {
  const terminalRef = useRef();
  const isRender = useRef(false);
  const counterRef = useRef(0); // ✅ this replaces localCounter

  useEffect(() => {
    if (isRender.current === true) return;
    isRender.current = true;

    const term = new Xterminal({
      rows: 25,
      cols: 60,
      cursorBlink: true,
      theme: {
        background: '#000000',
        foreground: '#ffffff',
      },
    });

    term.open(terminalRef.current);

    term.onData((data) => {
      socket.emit('terminal:write', data);
    });

    socket.on('terminal:data', (data) => {
      if (counterRef.current >= 200) {
        socket.emit('end');
        return;
      }
      console.log(counterRef.current);
      term.write(data);
      counterRef.current++;
    });

    socket.emit('terminal:write', 'cd ./user\r\n');
    socket.emit('terminal:write', 'clear\r\n');
  }, []);

  return <div ref={terminalRef} id="terminal" className="text-xs w-[96vw]" />;
};


export default Terminal;
