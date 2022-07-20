import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import RichTextEditor from "./RichTextEditor";

export default {
  title: "RichTextEditor",
  component: RichTextEditor,
} as ComponentMeta<typeof RichTextEditor>;

const Template: ComponentStory<typeof RichTextEditor> = (args) => (
  <RichTextEditor {...args} />
);

export const Default = Template.bind({});
