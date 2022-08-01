import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ColorPalete from "./ColorPalete";

export default {
  title: "ColorPalete",
  component: ColorPalete,
} as ComponentMeta<typeof ColorPalete>;

const Template: ComponentStory<typeof ColorPalete> = (args) => (
  <ColorPalete {...args} />
);
export const Default = Template.bind({});
