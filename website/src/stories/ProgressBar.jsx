import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './progressBar.css';

/**
 * Primary UI component for user interaction
 */
export const ProgressBar = ({ width, height, color, steps, fontSize, stepColor, ...props }) => {

    const [currentStep, setCurrentStep] = useState(1)
    const [animate, setAnimate] = useState(false);
    const stepValue = 80/steps

    const updateStep = () => {
        setAnimate(true)
        setTimeout(setAnimate(false), 1000)
        const currentStepCopy = currentStep;
        if (currentStepCopy < steps + 1) {
            setCurrentStep(currentStepCopy + 1)
        } else setCurrentStep(1)
    }

    const checkpoints = useMemo(() => {
        return [...Array(steps+1)].map((element, index) => (
            <circle className={index + 1 === currentStep ? "currentStep" : "step"} cx={50} cy={`${10+(stepValue*index)}%`} r={`${width}px`} fill={stepColor} />
            )
        )
    }, [currentStep, stepColor, stepValue, steps, width])

    const stepAnimation = useMemo(() => {
        return <circle className={!animate ? "stepNoAnim" : "stepAnimation"} cx={50} cy={`${10+(stepValue*(currentStep-1))}%`} r={`${width/1.5}px`} fill={'black'} />
      
    }, [animate, currentStep, stepValue, width])

    return (
        <div id="test" onClick={updateStep} style={{height: height, width: 100}}>
        <svg id="chart" width="100%" height="100%">
            <line style={{strokeWidth: 2, stroke: color, }} className="bar" x1={50} y1="10%" x2={50} y2="90%" strokeLinecap="round"></line>
            {stepAnimation}
            {checkpoints}
        </svg>
        </div>
    );
};

ProgressBar.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    steps: PropTypes.number,
    fontSize: PropTypes.number,
    stepColor: PropTypes.string
};

ProgressBar.defaultProps = {
    width: 5,
    height: 100,
    color: 'black',
    steps: 5,
    fontSize: 10,
    stepColor: 'aquamarine'
};