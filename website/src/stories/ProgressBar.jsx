import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './progressBar.css';

/**
 * Primary UI component for user interaction
 */
export const ProgressBar = ({ width, height, color, steps, fontSize, stepColor, ...props }) => {

    const [currentStep, setCurrentStep] = useState(1)
    const stepValue = 80/steps

    const updateStep = () => {
        const currentStepCopy = currentStep;
        if (currentStepCopy < steps + 1) {
            setCurrentStep(currentStepCopy + 1)
        } else setCurrentStep(1)
    }

    const checkpoints = useMemo(() => {
        return [...Array(steps+1)].map((element, index) => (
            <circle className={`${index + 1 === currentStep ? "currentStep" : "step"}`} cx={width} cy={`${10+(stepValue*index)}%`} r={index + 1 === currentStep ? `${width/1.5}px` : `${width/2}px`} fill={stepColor} />
            )
        )
    }, [currentStep, stepColor, stepValue, steps, width])

    const stepCount = () => {
        return [...Array(steps+1)].map((element, index) => (
            <text style={{fontSize: `${fontSize}px`}} className='stepCount' x={width} y={`${10+(stepValue*index)}%`} dominantBaseline="middle" textAnchor='middle'>{index === 0 ? 'Start' : index === steps ? 'End' : index + 1}</text>
        ))
    }

    return (
        <div onClick={updateStep} style={{height: height, width: width*2}}>
        <svg id="chart" width="100%" height="100%">
            <line style={{strokeWidth: width/2, stroke: color,}} className="bar" x1={width} y1="10%" x2={width} y2="90%" strokeLinecap="round"></line>
            {checkpoints}
            {stepCount()}
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