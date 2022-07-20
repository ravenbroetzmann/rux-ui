import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Switch from "./Switch";

export default {
  title: "Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;
export const Default = Template.bind({});
