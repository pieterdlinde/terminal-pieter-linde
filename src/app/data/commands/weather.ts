import axios, { AxiosResponse } from "axios";

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather amsterdam';
  }
  const weather = await getWeather(city);
  return weather;
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