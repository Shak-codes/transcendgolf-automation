import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import "./progressBar.css";

/**
 * Primary UI component for user interaction
 */
export const ProgressBar = ({
  curNode,
  containerWidth,
  containerHeight,
  barWidth,
  barColor,
  nodes,
  nodeSize,
  curNodeColor,
  nodeColor,
  ...props
}) => {
  const [animate, setAnimate] = useState(false);

  const stepValue = useMemo(() => {
    return 80 / nodes;
  }, [nodes]);

  const radius = useMemo(() => {
    return nodeSize / 1.5;
  }, [nodeSize]);

  const updateNode = () => {
    if (!animate) {
      setAnimate(true);
      setAnimate(false);
    }
  };

  const bar = useMemo(() => {
    return [...Array(nodes)].map((element, index) => (
      <line
        style={{ strokeWidth: barWidth, stroke: barColor }}
        className="bar"
        x1={50}
        y1={`${10 + stepValue * index + nodeSize / 2}%`}
        x2={50}
        y2={`${10 + stepValue * (index + 1) - nodeSize / 2}%`}
        strokeLinecap="round"
      ></line>
    ));
  }, [barColor, barWidth, nodeSize, nodes, stepValue]);

  const node = useMemo(() => {
    return [...Array(nodes + 1)].map((element, index) => (
      <circle
        className={index + 1 === curNode ? "curNode" : "node"}
        cx={50}
        cy={`${10 + stepValue * index}%`}
        r={`${nodeSize}%`}
        fill={index + 1 === curNode ? `${curNodeColor}` : `${nodeColor}`}
      />
    ));
  }, [nodes, curNode, stepValue, nodeSize, curNodeColor, nodeColor]);

  const nodeAnimation = useMemo(() => {
    return (
      <circle
        className={!animate ? "staticNode" : "movingNode"}
        cx={50}
        cy={`${10 + stepValue * (curNode - 1)}%`}
        r={`${radius}%`}
        fill={curNodeColor}
      />
    );
  }, [animate, stepValue, curNode, radius, curNodeColor]);

  return (
    <svg
      {...props}
      id="chart"
      width={100}
      height={containerHeight}
      onClick={updateNode}
    >
      {bar}
      {nodeAnimation}
      {node}
    </svg>
  );
};

ProgressBar.propTypes = {
  curNode: PropTypes.number,
  containerWidth: PropTypes.number,
  containerHeight: PropTypes.number,
  barWidth: PropTypes.number,
  barColor: PropTypes.string,
  nodes: PropTypes.number,
  nodeSize: PropTypes.number,
  curNodeColor: PropTypes.string,
  nodeColor: PropTypes.string,
};

ProgressBar.defaultProps = {
  curNode: 1,
  containerWidth: 5,
  containerHeight: 500,
  barWidth: 1,
  barColor: "aquamarine",
  nodes: 4,
  nodeSize: 8,
  futNodeColor: "aquamarine",
  nodeColor: "aquamarine",
};
