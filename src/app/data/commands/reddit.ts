export const reddit = async (args: string): Promise<string> => {
    window.open(`https://www.reddit.com/search/?q=${args}`);
    return `Searching Reddit for ${args}...`;
  };