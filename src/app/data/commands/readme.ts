export const readme = async (args: string[]): Promise<string> => {
    const readme = await getReadme();
    return `Opening GitHub README...\n${readme}`;
  };