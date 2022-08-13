import React from "react";

import { Card } from "./Card";

const test = () => {
  console.log("clicked!");
};

export default {
  title: "Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    shadowColor: { control: "color" },
  },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  backgroundColor: "coral",
  height: 100,
  width: 100,
  borderRadius: 10,
  shadowStrength: 10,
  shadowColor: "lightblue",
  shadowSpread: 2,
  blurStrength: 2,
  onClick: test,
};
