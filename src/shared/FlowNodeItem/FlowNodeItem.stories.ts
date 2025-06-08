import type { Meta, StoryObj } from "@storybook/react-vite";
import { FlowNodeItem as Component } from "./FlowNodeItem";
import { fn } from "storybook/test";

const meta = {
  title: "FlowNodeItem",
  component: Component,
  args: {
    collapsed: false,
    selected: false,
    schema: {
      category: "output",
      description: "Output node",
      id: "Output",
      name: "Output",
      properties: [],
      tags: [],
    },
    onChangeCollapse: fn(),
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

export const Selected: Story = {
  args: {
    selected: true,
  },
};

export const CategoryInput: Story = {
  args: {
    schema: {
      category: "input",
      description: "Input node",
      id: "Input",
      name: "Input",
      properties: [],
      tags: [],
    },
  },
};
export const CategoryOutput: Story = {
  args: {
    schema: {
      category: "output",
      description: "Output node",
      id: "Output",
      name: "Output",
      properties: [],
      tags: [],
    },
  },
};
export const CategoryProcessor: Story = {
  args: {
    schema: {
      category: "processor",
      description: "Processor node",
      id: "Processor",
      name: "Processor",
      properties: [],
      tags: [],
    },
  },
};
