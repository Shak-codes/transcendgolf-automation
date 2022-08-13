import React from "react";
import PropTypes from "prop-types";
import "./card.css";

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  backgroundColor,
  height,
  width,
  borderRadius,
  shadowStrength,
  shadowColor,
  shadowSpread,
  blurStrength,
  onClick,
  ...props
}) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        height: height,
        width: width,
        borderRadius: `${borderRadius}px`,
        boxShadow: `${shadowStrength}px ${shadowStrength}px ${blurStrength}px ${shadowSpread}px ${shadowColor}`,
      }}
      className="container"
      onClick={onClick}
    />
  );
};

Card.propTypes = {
  backgroundColor: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  borderRadius: PropTypes.number,
  shadowStrength: PropTypes.number,
  shadowColor: PropTypes.string,
  shadowSpread: PropTypes.number,
  blurStrength: PropTypes.number,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  backgroundColor: null,
  height: 1080,
  width: 720,
  borderRadius: 10,
  shadowStrength: 10,
  shadowColor: "lightblue",
  shadowSpread: 2,
  blurStrength: 2,
  onClick: undefined,
};
