import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt b22 shadow-3 br3"
        options={{ max: 25 }}
        style={{ height: 'auto', width: 200 }}
      >
        <div style={{ marginTop: '10px' }} className="Tilt-inner">
          <img style={{ paddingTop: '10px' }} src={brain} alt="logo" />{' '}
          <h1>Smart Brain</h1>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
