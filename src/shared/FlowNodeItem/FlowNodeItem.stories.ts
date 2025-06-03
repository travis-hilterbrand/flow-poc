import type { Meta, StoryObj } from "@storybook/react-vite";
import { FlowNodeItem as Component } from "./FlowNodeItem";
import { MockNodeSchemaInput } from "../../mocks/schema";

const meta = {
  title: "FlowNodeItem",
  component: Component,
  args: {
    collapsed: false,
    schema: MockNodeSchemaInput,
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Collapsed: Story = {
  args: {
    collapsed: true,
  },
};
