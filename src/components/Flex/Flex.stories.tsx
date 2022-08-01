import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Flex from "./Flex";
import Button from "../Button/Button";

export default {
  title: "Flex",
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;
export const Row = Template.bind({});
Row.args = {
  direction: "row",
  children: (
    <>
      <Button>Click Me</Button>
      <Button>Click Me</Button>
      <Button>Click Me</Button>
      <Button>Click Me</Button>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  ...Row.args,
  direction: "column",
};
