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
      github: "github",
      linkedin: "linkedin",
      medium: "medium"
    },
    email: "pieterdlinde@gmail.com",
    hostname: "lindehouse",
    username: "guest",
    repo: "https://github.com/pieterdlinde/terminal-pieter-linde/blob/main/README.md",
    resume_url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Resume.pdf",
    gameGui_ur:"https://game-pieter-linde-profile.firebaseapp.com",
    gui_url:"https://pieter-linde-profile.firebaseapp.com/"
  };
  
  export default config;
  