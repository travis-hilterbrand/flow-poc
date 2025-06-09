import { CSSProperties, ReactNode } from "react";
import "./style.css";

export interface IconChipProps {
  background: string;
  color: string;
  icon: ReactNode;
  size?: number;
  style?: CSSProperties;
}

export const IconChip = (props: IconChipProps) => {
  const { background, color, icon, size = 32, style } = props;
  return (
    <div
      style={{ background, color, height: size, width: size, ...style }}
      className="icon-chip"
    >
      {icon}
    </div>
  );
};
