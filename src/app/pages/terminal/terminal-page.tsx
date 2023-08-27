"use client"
import React, { useRef, useState } from 'react';
import '../../../app/globals.css';

import TerminalToolbar from './terminal-toolbar';
import TerminalCommandLine from './terminal-command-line';

export default function TerminalPage(prop: { terminalState: any }) {
    const [isMaximized, setIsMaximized] = useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const onClickAnywhere = () => {
        inputRef!.current!.focus();
    };

    const onMaximizeScreen = () => {
        setIsMaximized(!isMaximized)
    };

    const onTerminalClose = () => {
        prop.terminalState.setIsTerminalClosed(true)
    };

    if (prop.terminalState.isTerminalClosed) {
        return <></>
    }

    return (
        <>
            <div className='text-light-foreground dark:text-dark-foreground rounded-t-md' style={{ borderColor: '#CECECE', borderWidth: '5px', background: 'linear-gradient(90deg, rgba(1,84,229,1) 0%, rgba(32,117,242,1) 10%, rgba(56,178,254,1) 100%)' }}>
                <TerminalToolbar onMaximizeScreen={onMaximizeScreen} onTerminalClose={onTerminalClose}></TerminalToolbar>
            </div>
            <div
                className="text-light-foreground dark:text-dark-foreground md:text-base rounded-b-md"
                onClick={onClickAnywhere}
                style={{ height: `${isMaximized ? '94vh' : '70vh'}`, width: `${isMaximized ? '99.8vw' : '70vw'}`, borderBottomWidth: '5px', borderLeftWidth: '5px', borderRightWidth: '5px'}} >
                <TerminalCommandLine inputRef={inputRef} containerRef={containerRef}></TerminalCommandLine>
            </div>
        </>
    );
};
