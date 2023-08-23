import config from "../config";

export const cd = async (args: string): Promise<string> => {
  config.hostname =  args;
  return `
      Still some things to do here...
    `;
  };