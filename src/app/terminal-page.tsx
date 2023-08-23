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
            <div
                className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base"
                onClick={onClickAnywhere}
            >
                <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
                    <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
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