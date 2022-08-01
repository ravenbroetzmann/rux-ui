import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
  name: "default",
  placeholder: "Placeholder...",
  type: "text",
};
export const Password = Template.bind({});
Password.args = {
  ...Default.args,
  type: "password",
};
