import { ReactNode } from "react";
import "./style.css";

export interface IconChipProps {
  background: string;
  color: string;
  icon: ReactNode;
  size?: number;
}

export const IconChip = (props: IconChipProps) => {
  const { background, color, icon, size } = props;
  return (
    <div
      style={{ background, color, height: size, width: size }}
      className="icon-chip"
    >
      {icon}
    </div>
  );
};
