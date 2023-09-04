import { useState } from "react";

export const useIsReadmeClosed = (defaultValue: boolean) => {
    const [isReadmeClosed, setIsReadmeClosed] = useState(defaultValue);

    return {
        isReadmeClosed: isReadmeClosed,
        setIsReadmeClosed:(isClosed:  boolean) => setIsReadmeClosed(isClosed)
    }
};
