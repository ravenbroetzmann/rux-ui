import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import P from "./P";

export default {
  title: "P",
  component: P,
} as ComponentMeta<typeof P>;

const Template: ComponentStory<typeof P> = (args) => <P {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "dark",
  children: "Hello There",
  style: "default",
  size: "default",
};

export const Bold = Template.bind({});
Bold.args = {
  ...Default.args,
  style: "bold",
};
