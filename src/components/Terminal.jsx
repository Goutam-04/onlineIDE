'use client'

import { Terminal as Xterminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css'
import { useEffect, useRef } from 'react';

import socket from '@/socket/socket.js';

const Terminal = (props) => {

    const terminalRef=useRef();
    const isRender=useRef(false);
    
    var counter=props.counter;

    useEffect(()=>{
        if (isRender.current==true)return;
        isRender.current=true;


        const term=new Xterminal({
            rows: 25,
            cols: 60,
            setOption: ('theme', 'debian'),
            cursorBlink: true,

            
        });
        term.open(terminalRef.current)
        // socket.emit('terminal:write','cd ./user\r\n')
        
        term.onData((data)=>{
            
            socket.emit('terminal:write',data)
        })
        
        socket.on('terminal:data',(data)=>{
            if(counter>=10){socket.emit('end');}
            console.log(counter);
            term.write(data);
            counter++;
        })
    },[])
    
    return  <div ref={terminalRef} id='terminal' className='text-xs w-[40vw]'/>
}

export default Terminal
socket.emit('terminal:write','cd ./user\r\n')
socket.emit('terminal:write','clear\r\n')