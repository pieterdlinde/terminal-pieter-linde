export const duckduckgo = async (args: string): Promise<string> => {
    window.open(`https://duckduckgo.com/?q=${args}`);
    return `Searching DuckDuckGo for ${args}...`;
  };