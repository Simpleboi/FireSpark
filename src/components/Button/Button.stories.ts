import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button.react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",    
  component: Button,
  // parameters: {
  //   layout: 'centered',
  // },
  argTypes: {
    label: { control: "text" },
    variant: { 
      control: { 
        type: "select", 
        options: ["primary", "secondary", "success", "danger"] } },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: "Primary btn",
    variant: "secondary",
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

export const Success: Story = {
  args: {
    label: "Success Button",
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger Button",
    variant: "danger",
  },
};