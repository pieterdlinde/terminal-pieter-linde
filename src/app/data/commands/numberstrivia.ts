import axios, { AxiosResponse } from "axios";

export const numberstrivia = async (args: string): Promise<string> => {
  const number = args;
  if (!number || number.length === 0) {
    return 'Usage: numberstrivia [number]. Example: numberstrivia 33';
  }

  const data = await getData(args);
  return data.activity;
};
 

export const getData = async (name: string): Promise<{ activity: string }> => {
  const response: AxiosResponse<string> = await axios.get(
    'http://numbersapi.com/'+name
  );
  return {
    activity: `“${response.data}”`,
  };
};
