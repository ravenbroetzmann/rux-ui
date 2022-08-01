import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  color: "primary",
  children: "Click Me!",
};

export const Neutral = Template.bind({});
Neutral.args = {
  ...Primary.args,
  color: "neutral",
};
export const Default = Template.bind({});
Default.args = {
  ...Primary.args,
  color: "default",
};
export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  color: "neutral",
  disabled: true,
};
export const RedWarning = Template.bind({});
RedWarning.args = {
  ...Primary.args,
  color: "red",
  disabled: false,
};
