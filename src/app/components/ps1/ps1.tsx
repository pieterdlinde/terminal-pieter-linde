import config from '../../data/config';
import React from 'react';  

const Ps1: React.FC = () => {
  return (
    <div>
      <span className="text-light-yellow dark:text-dark-yellow">
        {config.username}
      </span>
      <span className="text-light-gray dark:text-dark-gray">@</span>
      <span className="text-light-green dark:text-dark-green">
        {config.hostname}
      </span>
      <span className="text-light-gray dark:text-dark-gray">:$ ~ </span>
    </div>
  );
};

export default Ps1;
