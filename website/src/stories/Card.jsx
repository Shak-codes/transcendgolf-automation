import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

/**
 * Primary UI component for user interaction
 */
export const Card = ({ label, labelSize, labelColor, backgroundColor, height, width, shadowStrength, shadowColor, shadowSpread, blurStrength, onClick, ...props }) => {

  return (
    <div 
    style={{
        backgroundColor: backgroundColor, 
        height: height, 
        width: width, 
        boxShadow: `${shadowStrength}px ${shadowStrength}px ${blurStrength}px ${shadowSpread}px ${shadowColor}`
    }}
    className="container"
    onClick={onClick}
    >
      <svg height={height} width={width}>
        <text x={width*0.05} y={height*0.05 + labelSize} className="title" style={{fontSize: labelSize, color: labelColor}}>{label}</text>
      </svg>
    </div>
  );
};

Card.propTypes = {
    label: PropTypes.string,
    labelSize: PropTypes.number,
    labelColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    shadowStrength: PropTypes.number,
    shadowColor: PropTypes.string,
    shadowSpread: PropTypes.number,
    blurStrength: PropTypes.number,
    onClick: PropTypes.func,
};

Card.defaultProps = {
    label: 'test',
    labelSize: 8,
    backgroundColor: null,
    height: 1080,
    width: 720,
    shadowStrength: 10,
    shadowColor: 'lightblue',
    shadowSpread: 2,
    blurStrength: 2,
    onClick: undefined,
};

