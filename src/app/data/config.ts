interface Config {
    readmeUrl: string;
    name: string;
    social: {
      github: string;
      linkedin: string;
      medium: string
    };
    email: string;
    hostname: string;
    username: string;
    repo: string;
    resume_url: string;
    gameGui_ur: string
    gui_url: string
  }
  
  const config: Config = {
    readmeUrl: "https://github.com/pieterdlinde/terminal-pieter-linde",
    name: "Pieter Linde",
    social: {
      github: "pieterdlinde",
      linkedin: "pieter-linde-518b08119",
      medium: "medium"
    },
    email: "pieterdlinde@gmail.com",
    hostname: "root",
    username: "guest",
    repo: "https://github.com/pieterdlinde/terminal-pieter-linde/blob/main/README.md",
    resume_url: "https://docs.google.com/document/d/1IDsYrdJ5r86gvtjpGfVovufp7-CxpZsUSoQ8fgfTLFY/edit",
    gameGui_ur:"https://game-pieter-linde-profile.firebaseapp.com",
    gui_url:"https://pieter-linde-profile.firebaseapp.com/"
  };
  
  export default config;
  