import React from "react";

import { ProgressBar } from "./ProgressBar";

export default {
  title: "ProgressBar",
  component: ProgressBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    barColor: { control: "color" },
    curNodeColor: { control: "color" },
    nodeColor: { control: "color" },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  curNode: 1,
  containerWidth: 5,
  containerHeight: 500,
  barWidth: 0.5,
  barColor: "aquamarine",
  nodes: 4,
  nodeSize: 8,
  curNodeColor: "aquamarine",
  nodeColor: "aquamarine",
};
