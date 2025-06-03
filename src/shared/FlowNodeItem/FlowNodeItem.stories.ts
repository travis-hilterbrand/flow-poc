import type { Meta, StoryObj } from "@storybook/react-vite";
import { FlowNodeItem as Component } from "./FlowNodeItem";
import { MockNodeSchemaInput } from "../../mocks/schema";

const meta = {
  title: "FlowNodeItem",
  component: Component,
  args: {
    schema: MockNodeSchemaInput,
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
