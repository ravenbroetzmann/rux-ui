import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Flex from "./Flex";
import Button from "../Button/Button";
import { Default, Primary } from "../Button/Button.stories";

export default {
  title: "Flex",
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    <Primary {...Primary.args}>Button 1</Primary>
    <Default {...Default.args}>Button 2</Default>
  </Flex>
);

Row.args = {
  direction: "row",
  justify: "space-arroud",
  items: "center",
  gap: "4em",
  width: "auto",
  height: "auto",
};

export const Column: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    <Primary {...Primary.args}>Button 1</Primary>
    <Default {...Default.args}>Button 2</Default>
  </Flex>
);

Column.args = {
  ...Row.args,
  direction: "column",
};
