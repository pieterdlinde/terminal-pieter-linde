"use client"
import '../app/globals.css';
import TerminalPage from './terminal-page';

const LandingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen ">
    <div className="w-2/3 max-h-96" >
      <TerminalPage />
    </div>
    </div>

  );
};

export default LandingPage;
