import { css } from "@emotion/css";
import { CSSProperties, ReactNode } from "react";

export type ChipColors = "grey" | "green" | "red";

const GREY = {
  background: "#F7F4f4",
  color: "#697282",
};
const GREEN = {
  background: "#ddfbe8",
  color: "#24c061",
};
const RED = {
  background: "#ffccea",
  color: "red",
};

export type ChipProps = {
  color: ChipColors;
  icon?: () => ReactNode;
  style?: CSSProperties;
  text: string;
};
export const Chip = (props: ChipProps) => {
  const { color: colorVariant, icon, style, text } = props;

  let background = GREY.background;
  let color = GREY.color;
  if (colorVariant === "green") {
    background = GREEN.background;
    color = GREEN.color;
  } else if (colorVariant === "red") {
    background = RED.background;
    color = RED.color;
  }

  return (
    <div
      className={css`
        border-radius: 8px;
        font-size: 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 24px;
        padding: 0 12px;
        background: ${background};
        color: ${color};
      `}
      style={style}
    >
      {icon && icon()}
      {text}
    </div>
  );
};
