import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import RichInput from "./RichInput";

export default {
  title: "RichInput",
  component: RichInput,
} as ComponentMeta<typeof RichInput>;

const Template: ComponentStory<typeof RichInput> = (args) => (
  <RichInput {...args} />
);
export const Default = Template.bind({});
