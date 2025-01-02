import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionProps } from "./Accordion.react";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  parameters: {
    layout: "centered",
  },
  component: Accordion,
  argTypes: {
    allowMultiple: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<AccordionProps>;

export const Default: Story = {
  args: {
    items: [
      { title: "Section 1", content: "Content for section 1" },
      { title: "Section 2", content: "Content for section 2" },
      { title: "Section 3", content: "Content for section 3" },
    ],
    allowMultiple: false,
  },
};

export const AllowMultiple: Story = {
  args: {
    items: [
      { title: "Section 1", content: "Content for section 1" },
      { title: "Section 2", content: "Content for section 2" },
      { title: "Section 3", content: "Content for section 3" },
    ],
    allowMultiple: true,
  },
};
