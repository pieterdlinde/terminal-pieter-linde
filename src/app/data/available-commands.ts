import * as bin from './commands/index';

// Define the structure of an available command
export class AvailableCommand {
  public name: string;         // Name of the command
  public description: string;  // Description of the command
  public dangerouslySetInnerHTML: boolean;

  constructor(name: string, description: string, dangerouslySetInnerHTML: boolean) {
    this.name = name;
    this.description = description;
    this.dangerouslySetInnerHTML = dangerouslySetInnerHTML;
  }
}
export class CommandOutput { 
  public output: string;  // Description of the command
  public dangerouslySetInnerHTML: boolean;

  constructor(output: string, dangerouslySetInnerHTML: boolean) {
    this.output = output; 
    this.dangerouslySetInnerHTML = dangerouslySetInnerHTML;
  }
}

// Create a class to store available commands
export class AvailableCommands {
  // Array to hold the available command objects
  public static allCommands(): AvailableCommand[] {
    return [
      new AvailableCommand("help", "Show help information", true),// Done
      new AvailableCommand("about", "About Me", false),
      new AvailableCommand("banner", "Show a banner", true),
      // new AvailableCommand("bing", "Search using Bing"),
      // new AvailableCommand("cd", "Change directory"),
      new AvailableCommand("date", "Display the current date", false),
      // new AvailableCommand("echo", "Print a message"),
      new AvailableCommand("email", "Send me an email", true),
      new AvailableCommand("github", "Open GitHub", true),
      new AvailableCommand("google", "Search using Google", true),
      new AvailableCommand("linkedin", "Open LinkedIn", true),
      // new AvailableCommand("ls", "List files in a directory"),
      new AvailableCommand("projects", "Show projects", true),
      new AvailableCommand("quote", "Display a quote", false),
      // new AvailableCommand("reddit", "Open Reddit"),
      new AvailableCommand("repo", "Open repository", true),
      new AvailableCommand("resume", "Open resume", true),
      // new AvailableCommand("sudo", "Execute as superuser"),
      // new AvailableCommand("sumfetch", "Fetch summary"),
      new AvailableCommand("weather", "Display weather", true),
      // new AvailableCommand("whoami", "Show current user"),
      new AvailableCommand("bored", "Are you board?", false),
      new AvailableCommand("agify", "How old is your name?", false),
      new AvailableCommand("chucknorris", "Do you want to go there?", false),
      // new AvailableCommand("number", "Fun fact about your favorite number"), -http not allowed
      new AvailableCommand("country", "Country Facts", false),
      new AvailableCommand("meow", "meow meow meow meow", false),
      new AvailableCommand("gui", "Profile Website", true),
      new AvailableCommand("game", "Game (In progress)", true),
      new AvailableCommand("references", "My references", true),
    ]
  };

  // Function to check if a given command exists in the list of available commands
  public static commandExists = (command: string): boolean => {
    // Use the some() method to check if any command's Name matches the given command
    // Returns true if a match is found, otherwise false
    const exist = AvailableCommands.allCommands().some(d => d.name.toLowerCase() === command.toLowerCase());
    return exist;
  };

  public static executeCommand = async (command: string, argumentData?: string): Promise<CommandOutput> => {
   const availableCommand = AvailableCommands.allCommands().find(d => d.name.toLowerCase() === command.toLowerCase())
    if (!availableCommand) {
      // Not a valid command
      return new CommandOutput("Invalid Command", true);
    }

    const anyBin: any = bin;
    const output = await anyBin[command.toLowerCase()](argumentData);

    return new CommandOutput(output, availableCommand.dangerouslySetInnerHTML);
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

