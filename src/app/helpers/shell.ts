import React from 'react';
import { AvailableCommands } from '../data/available-commands';

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>
) => {
  const args: any = command.split(' ');
  if (args[0] === 'clear') {
    clearHistory();
  } else if (command === '') {
    setHistory('');
  } else if (!AvailableCommands.commandExists(args[0])) {
    setHistory(
      `shell: command not found: ${args[0]}. Try 'help' to get started.`
    );
  } else {
    const result = await AvailableCommands.executeCommand(args[0], args[1]);
    setHistory(result);
  }

  setCommand('');
};
