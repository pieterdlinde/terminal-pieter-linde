import * as bin from './bin';

export const commandExists = (command: string): boolean => {
  const commands: string[] = ['clear', ...Object.keys(bin)];
  return commands.indexOf(command.split(' ')[0].toLowerCase()) !== -1;
};
