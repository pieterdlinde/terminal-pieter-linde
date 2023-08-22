import axios, { AxiosResponse } from 'axios';
import config from '../helpers/config';

interface GitHubRepo {
  name: string;
  html_url: string;
  // Add other properties as needed
}

interface QuoteData {
  content: string;
  author: string;
  // Add other properties as needed
}

export const getProjects = async (): Promise<GitHubRepo[]> => {
  const response: AxiosResponse<GitHubRepo[]> = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`
  );
  return response.data;
};

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

export const getQuote = async (): Promise<{ quote: string }> => {
  const response: AxiosResponse<QuoteData> = await axios.get(
    'https://api.quotable.io/random'
  );
  return {
    quote: `“${response.data.content}” — ${response.data.author}`,
  };
};
