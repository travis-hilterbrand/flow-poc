import { ReactNode } from "react";
import { FlowNodeCategories, FlowThemes } from "../types";
import { brown } from "@mui/material/colors";
import { grey } from "@mui/material/colors";
import { yellow } from "@mui/material/colors";
import AnimationIcon from "@mui/icons-material/Animation";
import DownloadIcon from "@mui/icons-material/Download";
import UploadIcon from "@mui/icons-material/Upload";

export const flowCategoryToTheme = (
  category: FlowNodeCategories
): FlowThemes => {
  switch (category) {
    case "input":
      return "grey";
    case "output":
      return "yellow";
    case "processor":
      return "brown";
    default:
      throw new Error(`Unknown flow node type: ${category}`);
  }
};

export const flowCategoryToIcon = (category: FlowNodeCategories): ReactNode => {
  switch (category) {
    case "input":
      return <DownloadIcon />;
    case "output":
      return <UploadIcon />;
    case "processor":
      return <AnimationIcon />;
    default:
      throw new Error(`Unknown flow node type: ${category}`);
  }
};
export const flowThemeToBackground = (
  theme: FlowThemes,
  type: "dark" | "light"
): string => {
  const index = type === "dark" ? 500 : 200;
  switch (theme) {
    case "brown":
      return brown[index];
    case "grey":
      return grey[index];
    case "yellow":
      return yellow[index];
  }
};
