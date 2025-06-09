import type { Meta, StoryFn, StoryObj } from "@storybook/react-vite";
import { FlowNodeItem as Component } from "./FlowNodeItem";
import { fn } from "storybook/test";

type MetaProps = typeof Component;
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
      name: "Basic Output",
      properties: [
        { label: "Default value", name: "defaultValue", required: true },
      ],
      tags: [],
    },
    onChangeCollapse: fn(),
    onDeleteNode: fn(),
    onDuplicateNode: fn(),
  },
} satisfies Meta<MetaProps>;

export default meta;

const Template: StoryFn<MetaProps> = (props) => (
  <div style={{ marginTop: 200 }}>
    <Component {...props} />
  </div>
);

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: Template,
  args: {},
};

export const Collapsed: Story = {
  render: Template,
  args: {
    collapsed: true,
  },
};

export const Selected: Story = {
  render: Template,
  args: {
    selected: true,
  },
};

export const ToolbarOpen: Story = {
  render: Template,
  args: {
    forceToolbarOpen: true,
    selected: true,
  },
};

export const CategoryInput: Story = {
  render: Template,
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
  render: Template,
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
  render: Template,
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
