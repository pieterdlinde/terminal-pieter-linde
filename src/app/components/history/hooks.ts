import React, { useState } from 'react'; 
import { History } from './interface';

export const useHistory = (defaultValue: History[]) => {
  const [history, setHistory] = useState<History[]>(defaultValue);
  const [command, setCommand] = useState<string>('');
  const [lastCommandIndex, setLastCommandIndex] = useState<number>(0);

  return {
    history,
    command,
    lastCommandIndex,
    setHistory: (output: string) =>
      setHistory([
        ...history,
        {
          id: history.length,
          date: new Date(),
          command,
          output,
        },
      ]),
    setCommand,
    setLastCommandIndex,
    clearHistory: () => setHistory([]),
  };
};
