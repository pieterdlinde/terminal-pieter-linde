import config from "../config";

export const banner = (args?: string[]): string => {
  return `
  
/$$$$$$$  /$$             /$$                        
| $$__  $$|__/            | $$                        
| $$  \ $$ /$$  /$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$ 
| $$$$$$$/| $$ /$$__  $$|_  $$_/   /$$__  $$ /$$__  $$
| $$____/ | $$| $$$$$$$$  | $$    | $$$$$$$$| $$  \__/
| $$      | $$| $$_____/  | $$ /$$| $$_____/| $$      
| $$      | $$|  $$$$$$$  |  $$$$/|  $$$$$$$| $$      
|__/      |__/ \_______/   \___/   \_______/|__/      
                                                     

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the GitHub repository.
`
};
