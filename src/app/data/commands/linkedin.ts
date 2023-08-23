import config from "../config";

export const linkedin = async (args: string[]): Promise<string> => {
    window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
    return 'Opening LinkedIn...';
  };