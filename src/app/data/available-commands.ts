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
      // new AvailableCommand("bing", "Search using Bing"),
      // new AvailableCommand("cd", "Change directory"),
      new AvailableCommand("date", "Display the current date"),
      // new AvailableCommand("echo", "Print a message"),
      new AvailableCommand("email", "Send me an email"),
      new AvailableCommand("github", "Open GitHub"),
      new AvailableCommand("google", "Search using Google"),
      new AvailableCommand("linkedin", "Open LinkedIn"),
      // new AvailableCommand("ls", "List files in a directory"),
      new AvailableCommand("projects", "Show projects"),
      new AvailableCommand("quote", "Display a quote"),
      // new AvailableCommand("reddit", "Open Reddit"),
      new AvailableCommand("repo", "Open repository"),
      new AvailableCommand("resume", "Open resume"),
      // new AvailableCommand("sudo", "Execute as superuser"),
      // new AvailableCommand("sumfetch", "Fetch summary"),
      new AvailableCommand("weather", "Display weather"),
      // new AvailableCommand("whoami", "Show current user"),
      new AvailableCommand("bored", "Are you board?"),
      new AvailableCommand("agify", "How old is your name?"),
      new AvailableCommand("chucknorris", "Do you want to go there?"),
      // new AvailableCommand("number", "Fun fact about your favorite number"), -http not allowed
      new AvailableCommand("country", "Country Facts"),
      new AvailableCommand("meow", "meow meow meow meow"),
      new AvailableCommand("gui", "Profile Website"),
      new AvailableCommand("game", "Game (In progress)"),
    ]
  };

  // Function to check if a given command exists in the list of available commands
  public static commandExists = (command: string): boolean => {
    // Use the some() method to check if any command's Name matches the given command
    // Returns true if a match is found, otherwise false
    const exist = AvailableCommands.allCommands().some(d => d.name.toLowerCase() === command.toLowerCase());
    return exist;
  };

  public static executeCommand = async (command: string, argumentData?: string): Promise<string> => {
    if (!this.commandExists(command)) {
      // Not a valid command
      return "Invalid Command";
    }

    const anyBin: any = bin;
    const output = await anyBin[command.toLowerCase()](argumentData);
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

