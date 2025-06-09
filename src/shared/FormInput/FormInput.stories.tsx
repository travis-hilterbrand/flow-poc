import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { FormInput as Component } from "./FormInput";

const meta = {
  title: "FormInput",
  component: Component,
  args: {
    label: "My label",
    placeholder: "My placeholder",
    onBlur: fn(),
    onFocus: fn(),
    onChange: fn(),
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "",
  },
};

export const HasDefaultText: Story = {
  args: {
    defaultValue: "My default text",
  },
};
