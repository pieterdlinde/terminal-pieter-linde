import History from "@/app/components/history/history";
import { useHistory } from "@/app/components/history/use-history";
import Input from "@/app/components/input/input";
import { banner } from "@/app/data/commands";
import { useCallback, useEffect, useRef } from "react";

export default function TerminalMobileCommandLine(props: any) {
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
        if (props.inputRef.current) {
            props.inputRef.current.scrollIntoView();
            props.inputRef.current.focus({ preventScroll: true });
        }
    }, [history]);

    return (
        <main className="text-light-foreground dark:text-dark-foreground flex column bg-light-background dark:bg-dark-background ">
            <div>
                <History history={history} />
                <Input
                    inputRef={props.inputRef}
                    containerRef={props.containerRef}
                    command={command}
                    history={history}
                    lastCommandIndex={lastCommandIndex}
                    setCommand={setCommand}
                    setHistory={setHistory}
                    setLastCommandIndex={setLastCommandIndex}
                    clearHistory={clearHistory}
                />
            </div>
        </main>);
}