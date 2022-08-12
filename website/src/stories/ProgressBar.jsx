import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './progressBar.css';

/**
 * Primary UI component for user interaction
 */
export const ProgressBar = ({ containerWidth, containerHeight, barColor, nodes, nodeSize, futNodeColor, curNodeColor, prevNodeColor, ...props }) => {

    const [curNode, setcurNode] = useState(1);
    const [animate, setAnimate] = useState(false);
    const stepValue = 80/nodes;

    const updateNode = () => {
        setAnimate(true)
        setTimeout(setAnimate(false), 1000)
        const curNodeCopy = curNode;
        if (curNodeCopy < nodes + 1) {
            setcurNode(curNodeCopy + 1)
        } else setcurNode(1)
    }

    const node = useMemo(() => {
        return [...Array(nodes+1)].map((element, index) => (
            <circle className={index + 1 === curNode ? "curNode" : index + 1 < curNode ? "prevNode" : "futNode"} cx={50} cy={`${10+(stepValue*index)}%`} r={`${containerWidth}px`} 
            fill={index + 1 === curNode ? `${curNodeColor}` : index + 1 < curNode ? `${prevNodeColor}` : `${futNodeColor}`}/>
            )
        )
    }, [nodes, curNode, stepValue, containerWidth, curNodeColor, prevNodeColor, futNodeColor])

    const nodeAnimation = useMemo(() => {
        return <circle className={!animate ? "staticNode" : "movingNode"} cx={50} cy={`${10+(stepValue*(curNode-1))}%`} r={`${containerWidth/1.5}px`} fill={curNodeColor} />
      
    }, [animate, stepValue, curNode, containerWidth, curNodeColor])

    return (
        <div id="test" onClick={updateNode} style={{width: 100, height: containerHeight}}>
        <svg id="chart" width="100%" height="100%">
            <line style={{strokeWidth: 2, stroke: barColor }} className="bar" x1={50} y1="10%" x2={50} y2="90%" strokeLinecap="round"></line>
            {nodeAnimation}
            {node}
        </svg>
        </div>
    );
};

ProgressBar.propTypes = {
    containerWidth: PropTypes.number,
    containerHeight: PropTypes.number,
    barColor: PropTypes.string,
    nodes: PropTypes.number,
    nodeSize: PropTypes.number,
    futNodeColor: PropTypes.string,
    curNodeColor: PropTypes.string,
    prevNodeColor: PropTypes.string,
};

ProgressBar.defaultProps = {
    containerWidth: 5,
    containerHeight: 100,
    barColor: 'aquamarine',
    nodes: 5,
    nodeSize: 20,
    futNodeColor: 'black',
    curNodeColor: 'aquamarine',
    prevNodeColor: 'aquamarine',
    
};