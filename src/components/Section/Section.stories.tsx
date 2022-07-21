import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Section from './Section';

export default {
  title: 'Section',
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => <Section {...args} />;

