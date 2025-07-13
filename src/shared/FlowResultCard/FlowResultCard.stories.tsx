import type { Meta, StoryFn, StoryObj } from "@storybook/react-vite";
import { FlowResultCard as Component } from "./FlowResultCard";
import { FlowRunResult } from "types";

const RESULT: FlowRunResult = {
  category: "input",
  error: "",
  success: true,
  executing: false,
  executeTime: 3200,
  result: "Result",
};

type MetaProps = typeof Component;
const meta = {
  title: "FlowResultCard",
  component: Component,
  args: {
    value: RESULT,
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
};
