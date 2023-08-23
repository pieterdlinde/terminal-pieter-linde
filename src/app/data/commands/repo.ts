import config from "../config";

export const repo = async (args: string): Promise<string> => {
    window.open(`${config.repo}`);
    return 'Opening Github repository...';
  };