import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconChip as Component } from "./IconChip";
import {
  flowThemeToBackground,
  flowCategoryToIcon,
  flowCategoryToTheme,
} from "../FlowThemes";
import { FlowNodeCategories } from "../../types";
import { getTextColor } from "../../theme/Theme";

const EXAMPLE_CATEGORY: FlowNodeCategories = "output";
const EXAMPLE_THEME = flowCategoryToTheme(EXAMPLE_CATEGORY);

const meta = {
  title: "IconChip",
  component: Component,
  args: {
    background: flowThemeToBackground(EXAMPLE_THEME, "dark"),
    color: getTextColor(),
    icon: flowCategoryToIcon(EXAMPLE_CATEGORY),
    size: 44,
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
