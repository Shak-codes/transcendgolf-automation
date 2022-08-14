import React, { useState } from 'react';
import './App.css';
import { ProgressBar } from './stories/ProgressBar';

import useWindowDimensions from './stories/assets/dimensions';

function App() {

  const { height, width } = useWindowDimensions();
  const [step, setStep] = useState(1)
  const text = 'Skedda removes the hassle of manually managing \nthe booking and scheduling of your spaces.\nThe perfect booking platform for your rooms, \ndesks, studios, labs, courts and more.'

  return (
    <div className='background'>
      <div className='skeddabg'></div>
      <div className='textContainer'>
        <h1 className='title'>BOOKINGS SIMPLIFIED</h1>
        <p className='text'>{text}</p>
      </div>
      <ProgressBar
        className='bar'
        curNode={step}
        containerHeight="25%"
        nodes={3}
        nodeSize={12}
        barColor="#d7e3df"
        barWidth={0.5}
        curNodeColor="#ffffff"
        nodeColor="#ffffff"
      />
    </div>
  );
}

export default App;
