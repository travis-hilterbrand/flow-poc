import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconChip as Component } from "./IconChip";
import {
  flowThemeToBackground,
  flowTypeToIcon,
  flowTypeToTheme,
  getTextColor,
} from "../FlowThemes";
import { FlowNodeTypes } from "../../types";

const EXAMPLE_TYPE: FlowNodeTypes = "output";
const EXAMPLE_THEME = flowTypeToTheme(EXAMPLE_TYPE);

const meta = {
  title: "IconChip",
  component: Component,
  args: {
    background: flowThemeToBackground(EXAMPLE_THEME, "dark"),
    color: getTextColor(),
    icon: flowTypeToIcon(EXAMPLE_TYPE),
    size: 44,
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
