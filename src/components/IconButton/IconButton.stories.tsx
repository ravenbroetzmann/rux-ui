import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButton from "./IconButton";

export default {
  title: "IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  featherIconName: "arrow-left-circle",
  variant: "default",
  size: "default",
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  variant: "primary",
};

export const Dark = Template.bind({});
Dark.args = {
  ...Default.args,
  variant: "dark",
};

export const Alert = Template.bind({});
Alert.args = {
  ...Default.args,
  variant: "alert",
  featherIconName: "alert-circle",
};

export const TextLabel = Template.bind({});
TextLabel.args = {
  ...Default.args,
  featherIconName: undefined,
  textLabel: "1",
};
