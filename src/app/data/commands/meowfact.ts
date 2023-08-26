import axios, { AxiosResponse } from "axios";

export const meowfact = async (args: string): Promise<string> => {
  const data = await getData();
  return data.quote;
};

interface CatInfo {
  data: string[];
}


export const getData = async (): Promise<{ quote: string }> => {
  const response: AxiosResponse<CatInfo> = await axios.get(
    'https://meowfacts.herokuapp.com/'
  );
 
  return {
    quote: `${response.data.data[0]}\n`,
  };
};
