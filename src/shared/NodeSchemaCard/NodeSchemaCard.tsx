import { css } from "@emotion/css";
import { CSSProperties } from "react";
import {
  flowCategoryToIcon,
  flowCategoryToTheme,
  flowThemeToBackground,
} from "shared/FlowThemes";
import { IconChip } from "shared/IconChip/IconChip";
import { getTextColor } from "theme/Theme";
import { FlowNodeSchema } from "types";

export type NodeSchemaCardVariants = "round" | "transparent";

export type NodeSchemaCardProps = {
  style?: CSSProperties;
  value: FlowNodeSchema;
  onClick: (value: FlowNodeSchema) => void;
};

export const NodeSchemaCard = (props: NodeSchemaCardProps) => {
  const { style, value, onClick } = props;
  const theme = flowCategoryToTheme(value.category);

  return (
    <div
      className={css`
        cursor: pointer;
        display: flex;
        gap: 8px;
        background: white;
        border-radius: 4px;
        border: 1px solid grey;
        padding: 8px;
      `}
      style={style}
      onClick={() => onClick(value)}
    >
      <IconChip
        background={flowThemeToBackground(theme, "dark")}
        color={getTextColor()}
        icon={flowCategoryToIcon(value.category)}
        size={44}
      />
      <div
        className={css`
          display: flex;
          flex-direction: column;
          overflow: hidden;
          gap: 2px;
          color: ${getTextColor()};
        `}
      >
        <div style={{ fontSize: 16 }}>{value.name}</div>
        <div style={{ fontSize: 12 }}>{value.description}</div>
      </div>
    </div>
  );
};
