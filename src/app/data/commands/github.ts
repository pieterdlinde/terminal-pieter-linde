import axios, { AxiosResponse } from "axios";
import config from "../config";

export const github = async (args: string): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening GitHub...';
};