import React from 'react';
import Ps1 from '../ps1/ps1';
import { History as HistoryInterface } from './interface';
import Typewriter from '@/app/hooks/type-writer';

interface HistoryProps {
  history: HistoryInterface[];
}

const History: React.FC<HistoryProps> = ({ history }) => {
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <Ps1 />
            </div>

            <div className="flex-grow">{entry.command}</div>
          </div>
          {entry.output.dangerouslySetInnerHTML ?
            <p className="whitespace-pre-wrap mb-2"
              style={{ lineHeight: 'normal' }}
              dangerouslySetInnerHTML={{ __html: entry.output.output }}></p>
            :
            <p className="whitespace-pre-wrap mb-2"
              style={{ lineHeight: 'normal' }}>
              <Typewriter text={entry.output.output} delay={0} /></p>}
        </div>
      ))}
    </>
  );
};

export default History;
