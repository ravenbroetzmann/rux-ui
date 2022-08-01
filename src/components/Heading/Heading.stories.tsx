import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from "./Heading";

export default {
  title: "Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const H1 = Template.bind({});
H1.args = {
  color: "primary",
  type: "h1",
  children: "My Name is Heading",
};

export const H2 = Template.bind({});
H2.args = {
  ...H1.args,
  type: "h2",
  color: "neutral",
};

export const H3 = Template.bind({});
H3.args = {
  ...H1.args,
  type: "h3",
  color: "neutral",
};

export const H4 = Template.bind({});
H4.args = {
  ...H1.args,
  type: "h4",
  color: "neutral",
};
