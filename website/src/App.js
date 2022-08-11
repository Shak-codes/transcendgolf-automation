import React, { useState } from 'react';
import './App.css';
import { ProgressBar } from './stories/ProgressBar';
import { Card } from './stories/Card';

import useWindowDimensions from './stories/assets/dimensions';

function App() {

  const { height, width } = useWindowDimensions();
  const [step, setStep] = useState(1)

  return (
    <div className='background'>
      <div className='cardContainer'>
        {step === 1 && 
        <>
        <Card width={width/1.5} height={height/1.5} backgroundColor="#ffffff" shadowColor='black' label="Skedda" labelSize={108}/>
        <div className='skeddabg'></div>
        <p>• User makes reservation using our Skedda application</p>
        <p>• Skedda saves the data</p>
        <p>- Month</p>
        <p>- Day</p>
        <p>- Time</p>
        </>
        }
        {step === 2 && 
        <Card width={width/1.5} height={height/1.5} backgroundColor="#ffffff" shadowColor='black' label="Skedda" labelSize={108}/>
        }
        {step === 3 && 
        <Card width={width/1.5} height={height/1.5} backgroundColor="#ffffff" shadowColor='black' label="Skedda" labelSize={108}/>
        }
        {step === 4 && 
        <Card width={width/1.5} height={height/1.5} backgroundColor="#ffffff" shadowColor='black' label="Skedda" labelSize={108}/>
        }
        {step === 5 && 
        <Card width={width/1.5} height={height/1.5} backgroundColor="#ffffff" shadowColor='black' label="Skedda" labelSize={108}/>
        }
        {step === 6 && 
        <Card width={width/1.5} height={height/1.5} backgroundColor="#ffffff" shadowColor='black' label="Skedda" labelSize={108}/>
        }
      </div>
      <ProgressBar width='40' height="100%" color="#cbf3f0" steps={8} fontSize={16} stepColor="#2ec4b6"/>
    </div>
  );
}

export default App;
