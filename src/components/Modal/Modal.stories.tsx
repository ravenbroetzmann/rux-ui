import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal from "./Modal";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const CanCacel = Template.bind({});
CanCacel.args = {
  title: "Title",
  descriprion: "I Describe something",
  type: "cancel-on",
};

export const CannotCancel = Template.bind({});
CannotCancel.args = {
  ...CanCacel.args,
  type: "cancel-off",
};
