"use client"
import React, { useRef, useEffect, useCallback } from 'react';
import '../app/globals.css'; 
import { useHistory } from './components/history/hooks'; 
import History from './components/history/history';
import Input from './components/input/input';
import { banner } from './data/commands';
 
 

const IndexPage: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = useCallback(() => setHistory(banner()), []);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  const onClickAnywhere = () => {
    inputRef!.current!.focus();
  };

const LandingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <img className='absolute z-0' src="background2.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
      <img className='absolute z-0' src='computer.png' style={{ left:'10px',top:'10px', width: '60px', height: '60px' }}></img>
      <div className="z-50">
        <TerminalPage />
      </div>
    </div>

  );
};

export default LandingPage;
