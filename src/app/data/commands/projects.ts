import axios, { AxiosResponse } from "axios"; 
import config from "../config";


export const projects = async (args: string): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`
    )
    .join('\n');
};


interface GitHubRepo {
  name: string;
  html_url: string;
  // Add other properties as needed
}

export const getProjects = async (): Promise<GitHubRepo[]> => {
  const response: AxiosResponse<GitHubRepo[]> = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`
  );
  return response.data;
};