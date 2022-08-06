import React from 'react';

import { ProgressBar } from './ProgressBar';


export default {
    title: 'ProgressBar',
    component: ProgressBar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {  
        color: { control: 'color' } ,
        stepColor: { control: 'color' }
    },
  };

const Template = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    height: 500,
    width: 20,
    color: 'black',
    steps: 5,
    stepColor: 'aquamarine',
};

