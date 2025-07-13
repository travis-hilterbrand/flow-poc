import type { Meta, StoryFn, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { FlowNodeResult as Component } from "./FlowNodeResult";
import { MockNodeSchemaInput } from "mocks/schema";

type MetaProps = typeof Component;
const meta = {
  title: "FlowNodeResult",
  component: Component,
  args: {
    value: MockNodeSchemaInput,
    onClick: fn(),
  },
} satisfies Meta<MetaProps>;

export default meta;

const Template: StoryFn<MetaProps> = (props) => (
  <div style={{ width: 500 }}>
    <Component {...props} />
  </div>
);

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: Template,
  args: {
    value: MockNodeSchemaInput,
  },
};
