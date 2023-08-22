interface Config {
    readmeUrl: string;
    name: string;
    ascii: string;
    social: {
      github: string;
      linkedin: string;
    };
    email: string;
    ps1_hostname: string;
    ps1_username: string;
    repo: string;
    resume_url: string;
    donate_urls: {
      paypal: string;
      patreon: string;
    };
  }
  
  const config: Config = {
    readmeUrl: "https://raw.githubusercontent.com/cveinnt/cveinnt/master/README.md",
    name: "John Doe",
    ascii: "liveterm",
    social: {
      github: "github",
      linkedin: "linkedin"
    },
    email: "contact@email.com",
    ps1_hostname: "lindehouse",
    ps1_username: "guest",
    repo: "https://github.com/Cveinnt/LiveTerm",
    resume_url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Resume.pdf",
    donate_urls: {
      paypal: "https://paypal.me/cveinnt",
      patreon: "https://patreon.com/cveinnt"
    }
  };
  
  export default config;
  