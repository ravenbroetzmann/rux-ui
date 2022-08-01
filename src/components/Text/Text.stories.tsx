import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "./Text";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "neutral",
  type: "normal",
  children: "Hello my Name is Text",
};

export const Bold = Template.bind({});
Bold.args = {
  ...Default.args,
  type: "bold",
};
