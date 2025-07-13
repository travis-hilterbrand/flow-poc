import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip as Component } from "./Chip";
import AddIcon from "@mui/icons-material/Add";

type MetaProps = typeof Component;
const meta = {
  title: "Chip",
  component: Component,
  args: {
    color: "green",
    icon: () => <AddIcon sx={{ fontSize: 18 }} />,
    text: "Success",
  },
} satisfies Meta<MetaProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fail: Story = {
  args: {
    color: "red",
    text: "Fail",
  },
};
export const Grey: Story = {
  args: {
    color: "grey",
    text: "Grey",
  },
};
