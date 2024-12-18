import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button.react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    variant: { control: { type: "select", options: ["primary", "secondary"] } },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: "Click Me!",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
  },
};

export const CustomLabel: Story = {
  args: {
    label: "Custom Label!",
    variant: "primary",
  },
};
