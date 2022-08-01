import React from 'react';
  import { ComponentMeta, ComponentStory } from '@storybook/react';
  import Heading from './Heading';

  export default {
    title: 'Heading',
    component: Heading,
  } as ComponentMeta<typeof Heading>;

  const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;
  
