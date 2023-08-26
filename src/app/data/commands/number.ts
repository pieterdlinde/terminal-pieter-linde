import axios, { AxiosResponse } from "axios";

export const number = async (args: string): Promise<string> => {
  const number = args;
  if (!number || number.length === 0) {
    return 'Usage: number [number]. Example: number 33';
  }

  const data = await getNumbersTrivia(args);
  return data.activity;
};
 

export const getNumbersTrivia = async (name: string): Promise<{ activity: string }> => {
  const response: AxiosResponse<string> = await axios.get(
    'http://numbersapi.com/'+name
  );
  return {
    activity: `“${response.data}”`,
  };
};
