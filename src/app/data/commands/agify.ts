import axios, { AxiosResponse } from "axios";

export const agify = async (args: string): Promise<string> => {
  const name = args;
  if (!name || name.length === 0) {
    return 'Usage: agify [name]. Example: agify pieter';
  }

  const data = await getData(args);
  return data.activity;
};

interface PersonData {
    count: number;
    name: string;
    age: number;
  }
  

const getData = async (name: string): Promise<{ activity: string }> => {
  const response: AxiosResponse<PersonData> = await axios.get(
    'https://api.agify.io/?name='+name
  );
  return {
    activity: `“${response.data.name}” — ${response.data.age}`,
  };
};
