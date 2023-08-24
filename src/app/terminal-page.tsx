"use client"
import React, { useRef, useEffect, useCallback } from 'react';
import '../app/globals.css';
import { useHistory } from './components/history/hooks';
import History from './components/history/history';
import Input from './components/input/input';
import { banner } from './data/commands';


const TerminalPage: React.FC = () => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const {
        history,
        command,
        lastCommandIndex,
        setCommand,
        setHistory,
        clearHistory,
        setLastCommandIndex,
    } = useHistory([]);

    const init = useCallback(() => setHistory(banner()), []);

    useEffect(() => {
        init();
    }, [init]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.scrollIntoView();
            inputRef.current.focus({ preventScroll: true });
        }
    }, [history]);

    const onClickAnywhere = () => {
        inputRef!.current!.focus();
    };

    return (
        <>
            <div className='text-light-foreground dark:text-dark-foreground rounded-t-md' style={{ borderColor: 'white', borderWidth: '5px', background: 'linear-gradient(90deg, rgba(1,84,229,1) 0%, rgba(32,117,242,1) 10%, rgba(56,178,254,1) 100%);' }}>
                <div className='flex p-1'>
                    <img src="cmd.png" style={{ marginRight: '7px', width: '30px', height: '25px' }}></img>
                    C:\Resume\PieterLinde\resume\cmd.exe
                    <div className='flex w-full origin-right justify-end'>
                        <div className='flex items-center origin-center justify-center rounded-sm' style={{ backgroundColor: '#ECEAD8', width: '22px', fontWeight: 'bold', boxShadow:'0.5px 0.5px 0.5px 0.5px rgba(0,0,0,0.35)' }}>
                            <img src="close.png" style={{ width: '15px', height: '15px', opacity:'0.6' }} ></img>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="text-light-foreground dark:text-dark-foreground md:text-base rounded-b-md"
                onClick={onClickAnywhere}
                style={{ height: '70vh', width: '70vw', borderBottomWidth: '5px', borderLeftWidth: '5px', borderRightWidth: '5px', boxShadow: '-4px -3px 45px 21px rgba(0,0,0,0.35)' }}
            >
                <main className="bg-light-background dark:bg-dark-background w-full h-full p-0 rounded-s">
                    <div className="p-3 overflow-hidden h-full  rounded border-light-yellow dark:border-dark-yellow">
                        <div ref={containerRef} className="overflow-y-auto h-full">
                            <History history={history} />
                            <Input
                                inputRef={inputRef}
                                containerRef={containerRef}
                                command={command}
                                history={history}
                                lastCommandIndex={lastCommandIndex}
                                setCommand={setCommand}
                                setHistory={setHistory}
                                setLastCommandIndex={setLastCommandIndex}
                                clearHistory={clearHistory}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default TerminalPage;