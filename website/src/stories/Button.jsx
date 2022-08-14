import React from "react";
import PropTypes from "prop-types";
import "./card.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  text,
  backgroundColor,
  textColor,
  onClick,
  ...props
}) => {
  return (
    <button style={{ backgroundColor: backgroundColor }} {...props}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: "Click me!",
  backgroundColor: null,
  textColor: null,
  onClick: undefined,
};
