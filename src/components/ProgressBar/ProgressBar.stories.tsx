import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ProgressBar, ProgressBarProps } from "./ProgressBar.react";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: { control: { type: "number", min: 0, max: 100 } },
    variant: {
      control: { type: "select", options: ["primary", "success", "danger", "info"] },
    },
    size: {
      control: { type: "select", options: ["sm", "md", "lg"] },
    },
    showLabel: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<ProgressBarProps>;

export const Default: Story = {
  args: {
    progress: 50,
    variant: "primary",
    size: "md",
    showLabel: true,
  },
};

export const Success: Story = {
  args: {
    progress: 75,
    variant: "success",
    size: "lg",
    showLabel: true,
  },
};

export const Danger: Story = {
  args: {
    progress: 25,
    variant: "danger",
    size: "sm",
    showLabel: false,
  },
};
