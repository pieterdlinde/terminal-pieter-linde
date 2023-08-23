import config from "../config";

export const email = async (args: string[]): Promise<string> => {
    window.open(`mailto:${config.email}`);
    return `Opening mailto:${config.email}...`;
  };