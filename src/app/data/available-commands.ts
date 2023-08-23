import * as bin from './commands/index';

// Define the structure of an available command
export class AvailableCommand {
  public name: string;         // Name of the command
  public description: string;  // Description of the command

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}

// Create a class to store available commands
export class AvailableCommands {
  // Array to hold the available command objects
  public static allCommands(): AvailableCommand[] {
    return [
      new AvailableCommand("help", "Show help information"),// Done
      new AvailableCommand("about", "About Me"),
      new AvailableCommand("banner", "Show a banner"),
      new AvailableCommand("bing", "Search using Bing"),
      new AvailableCommand("cd", "Change directory"),
      new AvailableCommand("date", "Display the current date"),
      // new AvailableCommand("donate", "Donate to a cause"),
      // new AvailableCommand("duckduckgo", "Search using DuckDuckGo"),
      // new AvailableCommand("echo", "Print a message"),
      // new AvailableCommand("emacs", "Open Emacs"),
      // new AvailableCommand("email", "Open email"),
      // new AvailableCommand("github", "Open GitHub"),
      // new AvailableCommand("google", "Search using Google"),
      // new AvailableCommand("linkedin", "Open LinkedIn"),
      // new AvailableCommand("ls", "List files in a directory"),
      // new AvailableCommand("nvim", "Open NeoVim"),
      // new AvailableCommand("projects", "Show projects"),
      // new AvailableCommand("quote", "Display a quote"),
      // new AvailableCommand("readme", "Open README file"),
      // new AvailableCommand("reddit", "Open Reddit"),
      // new AvailableCommand("repo", "Open repository"),
      // new AvailableCommand("resume", "Open resume"),
      // new AvailableCommand("sudo", "Execute as superuser"),
      // new AvailableCommand("sumfetch", "Fetch summary"),
      // new AvailableCommand("vi", "Open Vi"),
      // new AvailableCommand("vim", "Open Vim"),
      // new AvailableCommand("weather", "Display weather"),
      // new AvailableCommand("whoami", "Show current user"),
    ]
  };

  // Function to check if a given command exists in the list of available commands
  public static commandExists = (command: string): boolean => {
    // Use the some() method to check if any command's Name matches the given command
    // Returns true if a match is found, otherwise false
    const exist = AvailableCommands.allCommands().some(d => d.name === command);
    return exist;
  };

  public static executeCommand = async (command: string, argumentData?: string): Promise<string> => {
    if (!this.commandExists(command)) {
      // Not a valid command
      return "Invalid Command";
    }

    const anyBin: any = bin;
    const output = await anyBin[command](argumentData);
    return output;
  };


  public static handleTabCompletion = (
    command: string,
    setCommand: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const commands = AvailableCommands.allCommands().map(d => d.name).filter((entry) =>
      entry.startsWith(command),
    );

    if (commands.length === 1) {
      setCommand(commands[0]);
    }
  };
}

