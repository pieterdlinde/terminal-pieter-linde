import { useState } from "react";

export const useIsTerminalClosed = (defaultValue: boolean) => {
    const [isTerminalClosed, setIsTerminalClosed] = useState(defaultValue);

    return {
        isTerminalClosed,
        setIsTerminalClosed:(isClosed:  boolean) => setIsTerminalClosed(isClosed)
    }
};
