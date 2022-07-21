import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "./Card";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import P from "../P/P";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const ButtonAndTitle: ComponentStory<typeof Card> = (args) => (
  <Card>
    <div>
      <Heading type="h3">John Doe</Heading>
      <P style="bold">johndoe@dummy.com</P>
    </div>
    <Button variant="primary" onClick={() => {}}>
      Open
    </Button>
  </Card>
);
