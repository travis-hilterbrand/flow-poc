import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Search as Component } from "./Search";

const meta = {
  title: "Search",
  component: Component,
  args: {
    onBlur: fn(),
    onFocus: fn(),
    onChange: fn(),
    onEnter: fn(),
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "",
  },
};
