import config from "../config";

export const whoami = async (args: string): Promise<string> => {
    return `${config.username}`;
  }; 