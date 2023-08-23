import config from "../config";

export const resume = async (args: string): Promise<string> => {
    window.open(`${config.resume_url}`);
    return 'Opening resume...';
  };
  