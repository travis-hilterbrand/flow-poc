import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button as Component } from "./Button";

const meta = {
  title: "Button",
  component: Component,
  args: { onClick: fn() },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primary: true,
    label: "Component",
  },
};
