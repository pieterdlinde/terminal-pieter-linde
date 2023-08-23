export const quote = async (args: string[]): Promise<string> => {
    const data = await getQuote();
    return data.quote;
  };