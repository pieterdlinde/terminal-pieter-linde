import { AvailableCommands } from "../available-commands";

export const help = async (args: string[]): Promise<string> => {
    const commands: string[] = AvailableCommands.allCommands().map(d => d.name).sort();
    const commandList: string = commands
      .map((command, index) => {
        if ((index + 1) % 7 === 0) {
          return command + '\n';
        } else {
          return command + ' ';
        }
      })
      .join('');
  
    return `
  Welcome! Here are all the available commands:
  \n${commandList}\n
  [tab]: trigger completion.
  [ctrl+l]/clear: clear terminal.\n
  Type 'sumfetch' to display summary.
  `;
  };