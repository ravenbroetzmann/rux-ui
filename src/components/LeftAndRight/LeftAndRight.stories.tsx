import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LeftAndRight from "./LeftAndRight";
import { Default as DefaultInput } from "../Input/Input.stories";
import { Default as RichInputDefault } from "../RichInput/RichInput.stories";
import Heading from "../Heading/Heading";

export default {
  title: "LeftAndRight",
  component: LeftAndRight,
} as ComponentMeta<typeof LeftAndRight>;

const Template: ComponentStory<typeof LeftAndRight> = (args) => (
  <LeftAndRight {...args} />
);
export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Heading>Space Left And Right</Heading>
      <DefaultInput {...DefaultInput.args} />
      <RichInputDefault {...RichInputDefault.args} />
      <DefaultInput {...DefaultInput.args} />
      <DefaultInput {...DefaultInput.args} />
    </>
  ),
};
