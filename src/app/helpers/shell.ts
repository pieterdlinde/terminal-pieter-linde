import React from 'react';
import { AvailableCommands, CommandOutput } from '../data/available-commands';

export const shell = async (
  command: string,
  setHistory: (value: CommandOutput) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>
) => {
  const args: any = command.split(' ');
  if (args[0] === 'clear') {
    clearHistory();
  } else if (command === '') {
    setHistory(new CommandOutput('', true));
  } else if (!AvailableCommands.commandExists(args[0])) {
    setHistory(
      new CommandOutput(`shell: command not found: ${args[0]}. Try 'help' to get started.`, true)
    );
  } else {
    const result = await AvailableCommands.executeCommand(args[0], args.slice(1));
    setHistory(result);
  }

  setCommand('');
};
