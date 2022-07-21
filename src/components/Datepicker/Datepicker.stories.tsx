import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Datepicker from "./Datepicker";

export default {
  title: "Datepicker",
  component: Datepicker,
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = (args) => (
  <Datepicker {...args} />
);

export const Default = Template.bind({});
