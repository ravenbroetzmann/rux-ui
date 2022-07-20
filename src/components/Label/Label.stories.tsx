import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "./Label";

export default {
  title: "Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "dark",
  children: "This is a Label",
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  type: "primary",
};

export const Light = Template.bind({});
Light.args = {
  ...Default.args,
  type: "light",
};
