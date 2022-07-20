import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Alert from "./Alert";

export default {
  title: "Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "default",
  children: "This is just a Alert",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  children: "This is a Success",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  children: "This is a Warning",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  children: "This is a Error",
};
