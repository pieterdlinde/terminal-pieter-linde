import axios, { AxiosResponse } from "axios";

export const bored = async (args: string): Promise<string> => {
  const data = await getActivity();
  return data.activity;
};

interface ActivityData {
    activity: string;
    type: string;
    participants: number;
    price: number;
    link: string;
    key: string;
    accessibility: number;
  }
  

export const getActivity = async (): Promise<{ activity: string }> => {
  const response: AxiosResponse<ActivityData> = await axios.get(
    'http://www.boredapi.com/api/activity/'
  );
  return {
    activity: `“${response.data.type}” — ${response.data.activity}`,
  };
};
