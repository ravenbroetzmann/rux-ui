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
  variant: "big",
  style: "secondary",
  children: "Click Me",
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  style: "primary",
};
export const Light = Template.bind({});
Light.args = {
  ...Default.args,
  style: "default",
};
export const Dark = Template.bind({});
Dark.args = {
  ...Default.args,
  style: "dark",
};
