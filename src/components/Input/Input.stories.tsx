import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "./Input.react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    error: { control: "text" },
    variant: { control: { type: "select", options: ["outlined", "filled"] } },
    size: { control: { type: "select", options: ["sm", "md", "lg"] } },
  },
};

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    label: "Default Input",
    placeholder: "Enter text...",
    variant: "outlined",
    size: "sm",
  },
};

export const WithError: Story = {
  args: {
    label: "Input with Error",
    placeholder: "Enter text...",
    error: "This field is required",
    variant: "outlined",
    size: "md",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Cannot type here...",
    disabled: true,
    variant: "filled",
    size: "md",
  },
};
