"use client"
import '../app/globals.css';
import { useIsTerminalClosed } from './hooks/use-terminal-closed';
import TerminalPage from './terminal-page';

const LandingPage: React.FC = () => {
  const terminalState = useIsTerminalClosed(false);

  const onTerminalOpen = () => {
    if (terminalState.isTerminalClosed) {
      terminalState.setIsTerminalClosed(false)
    }
  };

  const onOpenYouTube = () => {
    if (terminalState.isTerminalClosed) {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <img className='absolute z-0' src="background2.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
      <div className={"absolute z-1 flex flex-col origin-center items-center " + `${terminalState.isTerminalClosed ? "cursor-pointer" : "cursor-not-allowed"}`} style={{ left: '10px', top: '10px' }}>
        <img onClick={onOpenYouTube} style={{ width: '60px', height: '60px' }} src='computer.png'></img>
        <div style={{ fontSize: '14px', color: '#D7D7D9', fontWeight: 'bold', fontFamily: 'initial' }}>My Computer</div>
        <img onClick={onTerminalOpen} style={{ marginTop: '15px', width: '60px', height: '40px' }} src='cmd-icon.png'></img>
        <div style={{ fontSize: '14px', color: '#D7D7D9', fontWeight: 'bold', fontFamily: 'initial' }}>Profile.exe</div>
      </div>
      <div className="z-50">
        <TerminalPage terminalState={terminalState} />
      </div>
    </div>

  );
};

export default LandingPage;
