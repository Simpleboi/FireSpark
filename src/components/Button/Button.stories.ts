import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button.react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",     // Where the component will apear in the StoryBook UI
  component: Button, // Type of component we're showcasing
  parameters: {
    layout: 'centered',
  },
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
    label: "Primary btn",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary btn",
    variant: "secondary",
  },
};

export const CustomLabel: Story = {
  args: {
    label: "Custom Label!",
    variant: "primary",
  },
};
