export const google = async (args: string[]): Promise<string> => {
    window.open(`https://google.com/search?q=${args.join(' ')}`);
    return `Searching Google for ${args.join(' ')}...`;
  };