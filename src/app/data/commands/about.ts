import config from "../config";

export const about = async (args: string[]): Promise<string> => {
    return `Hi, I am ${config.name}. 
  Welcome to my website!
  More about me:
  'sumfetch' - short summary.
  'resume' - my latest resume.
  'readme' - my GitHub readme.`;
  };