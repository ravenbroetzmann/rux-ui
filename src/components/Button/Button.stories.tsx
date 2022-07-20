import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Click me",
  size: "default",
  variant: "default",
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
};
