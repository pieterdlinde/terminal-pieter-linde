import axios, { AxiosResponse } from "axios";

export const chucknorris = async (args: string): Promise<string> => {
  const data = await getChucknorris(args);
  return data.activity;
};

interface ChuckNorrisJoke {
    categories: string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
  }

export const getChucknorris = async (name: string): Promise<{ activity: string }> => {
  const response: AxiosResponse<ChuckNorrisJoke> = await axios.get(
    'https://api.chucknorris.io/jokes/random'+name
  );
  return {
    activity: `“${response.data.value}”`,
  };
};
