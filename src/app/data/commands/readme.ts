import axios, { AxiosResponse } from "axios";
import config from "../config";

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n${readme}`;
};

export const getReadme = async (): Promise<string> => {
  const response: AxiosResponse<string> = await axios.get(config.readmeUrl);
  return response.data;
};
