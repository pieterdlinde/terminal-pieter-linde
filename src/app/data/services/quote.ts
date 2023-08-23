import axios, { AxiosResponse } from "axios";

interface QuoteData {
    content: string;
    author: string;
    // Add other properties as needed
  }

export const getQuote = async (): Promise<{ quote: string }> => {
    const response: AxiosResponse<QuoteData> = await axios.get(
      'https://api.quotable.io/random'
    );
    return {
      quote: `“${response.data.content}” — ${response.data.author}`,
    };
  };
  