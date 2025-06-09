import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { NodeSchemaCard as Component } from "./NodeSchemaCard";
import { MockNodeSchemaInput } from "mocks/schema";

const meta = {
  title: "NodeSchemaCard",
  component: Component,
  args: {
    value: MockNodeSchemaInput,
    onClick: fn(),
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: MockNodeSchemaInput,
  },
};
