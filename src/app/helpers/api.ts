import axios, { AxiosResponse } from 'axios';
import config from '../data/config';







export const getReadme = async (): Promise<string> => {
  const response: AxiosResponse<string> = await axios.get(config.readmeUrl);
  return response.data;
};

export const getWeather = async (city: string): Promise<string> => {
  try {
    const response: AxiosResponse<string> = await axios.get(
      `https://wttr.in/${city}?ATm`
    );
    return response.data;
  } catch (error) {
    return "error";
  }
};

