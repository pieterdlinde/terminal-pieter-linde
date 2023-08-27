"use client"
import React, { useRef } from 'react';
import '../app/globals.css';
import useScreenSize from './hooks/use-screen-size';
import { useIsTerminalClosed } from './hooks/use-terminal-closed';
import TerminalPage from './pages/terminal/terminal-page';
import TerminalMobileCommandLine from './pages/terminal/terminal-mobile-command-line';
import config from './data/config';

const LandingPage: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const terminalState = useIsTerminalClosed(false);
  const screenSize = useScreenSize();

  const onTerminalOpen = () => {
    if (terminalState.isTerminalClosed) {
      terminalState.setIsTerminalClosed(false)
    }
  };


  if (screenSize.width !== 0 && screenSize.width < 850) {
    return (
      <>
        <div>
          <div>
            Sorry not supported on mobile - yet :)
          </div>
          <div>
            {/* Visit <u><a className="text-light-blue dark:text-dark-blue underline" href="${config.gui_url}" target="_blank">here</a></u>  for progress */}
          </div>

        </div>

        {/* <TerminalMobileCommandLine inputRef={inputRef} containerRef={containerRef}></TerminalMobileCommandLine> */}
      </>
    )
  }


  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <img className='absolute z-0' src="background2.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
      <div className={"absolute z-1 flex flex-col origin-center items-center " + `${terminalState.isTerminalClosed ? "cursor-pointer" : "cursor-not-allowed"}`} style={{ left: '10px', top: '10px' }}>
        <img className="cursor-not-allowed" style={{ width: '60px', height: '60px' }} src='computer.png'></img>
        <div className="cursor-not-allowed" style={{ fontSize: '14px', color: '#D7D7D9', fontWeight: 'bold', fontFamily: 'initial' }}>My Computer</div>
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
