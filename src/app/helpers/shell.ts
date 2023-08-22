import React from 'react';
import * as bin from './bin';

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>
) => {
  const args: any = command.split(' ');
  args[0] = args[0].toLowerCase();

  if (args[0] === 'clear') {
    clearHistory();
  } else if (command === '') {
    setHistory('');
  } else if (!(args[0] in bin as any)) {
    setHistory(
      `shell: command not found: ${args[0]}. Try 'help' to get started.`
    );
  } else {
    const anyBin: any = bin;
    const output = await anyBin[args[0]](args.slice(1));
    setHistory(output);
  }

  setCommand('');
};
