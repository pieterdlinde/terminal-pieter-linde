import axios, { AxiosResponse } from "axios";

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