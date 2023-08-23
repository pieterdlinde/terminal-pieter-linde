import { AvailableCommands } from "../available-commands";

export const help = async (args: string): Promise<string> => { 
    const commandList: string = AvailableCommands.allCommands().sort()
      .map(command => {
          return '<b class="text-light-blue dark:text-dark-blue" >'+command.name+'</b>' +" - "+ command.description+ '\n';
      })
      .join('');
  
    return `
<b>Hello there!</b> Ready to explore? Here's what you can do:
\n${commandList}
[<b>tab</b>]: trigger completion.
[<b>ctrl+l</b>] / [<b>clear</b>]: clear terminal.
`;
  };