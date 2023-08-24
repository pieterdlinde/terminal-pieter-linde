"use client"
import '../app/globals.css';
import TerminalPage from './terminal-page';

const LandingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <img className='absolute z-0' src="background.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
      <div className="z-50">
        <TerminalPage />
      </div>
    </div>

  );
};

export default LandingPage;
