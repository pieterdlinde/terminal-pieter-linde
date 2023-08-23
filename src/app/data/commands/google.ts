export const google = async (args: string): Promise<string> => {
    window.open(`https://google.com/search?q=${args}`);
    return `Searching Google for ${args}...`;
  };