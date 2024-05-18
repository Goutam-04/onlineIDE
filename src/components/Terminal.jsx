'use client'

import { Terminal as Xterminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css'
import { useEffect, useRef } from 'react';

import socket from '@/socket/socket';

const Terminal = () => {

    const terminalRef=useRef();
    const isRender=useRef(false);

    useEffect(()=>{
        if (isRender.current==true)return;
        isRender.current=true;


        const term=new Xterminal({
            rows: 18,
            // cols: 40,
        });
        term.open(terminalRef.current)
        // socket.emit('terminal:write','cd ./user\r\n')
        
        term.onData((data)=>{
            socket.emit('terminal:write',data)
        })
        
        socket.on('terminal:data',(data)=>{
            term.write(data);
        })
    },[])
    
    return  <div ref={terminalRef} id='terminal'/>
}

export default Terminal
// socket.emit('terminal:write','cd ./user\r\n')