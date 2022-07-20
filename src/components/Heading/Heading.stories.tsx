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
  type: "h1",
  children: "Heading 1",
  color: "primary",
};

export const H2 = Template.bind({});
H2.args = {
  type: "h2",
  children: "Heading 2",
  color: "dark",
};

export const H3 = Template.bind({});
H3.args = {
  type: "h3",
  children: "Heading 3",
  color: "dark",
};

export const H4 = Template.bind({});
H4.args = {
  type: "h4",
  children: "Heading 4",
  color: "dark",
};
