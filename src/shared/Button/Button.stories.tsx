import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button as Component } from "./Button";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";

const meta = {
  title: "Button",
  component: Component,
  args: {
    variant: "transparent",
    onClick: fn(),
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "My Button",
  },
};

export const WithIcon: Story = {
  args: {
    icon: () => <HomeIcon />,
  },
};

export const Border: Story = {
  args: {
    icon: () => <AddIcon />,
    label: "Add",
    variant: "border",
  },
};

export const Round: Story = {
  args: {
    icon: () => <AddIcon />,
    variant: "round",
  },
};
