import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Select from "./Select";

export default {
  title: "Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultSelectedIndex: 0,
  options: [
    {
      id: 1,
      title: "Option 1",
    },
    {
      id: 2,
      title: "Option 2",
    },
    {
      id: 3,
      title: "Option 3",
      disabled: true,
    },
    {
      id: 1,
      title: "Option 4",
    },
  ],
};
