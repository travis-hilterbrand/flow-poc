import { css } from "@emotion/css";
import { CSSProperties, useMemo } from "react";
import { Chip } from "shared/Chip/Chip";
import {
  flowCategoryToIcon,
  flowCategoryToTheme,
  flowThemeToBackground,
} from "shared/FlowThemes";
import { IconChip } from "shared/IconChip/IconChip";
import { getTextColor } from "theme/Theme";
import { FlowRunResult } from "types";
import { ResultChip } from "./ResultChip";

export type FlowResultCardProps = {
  style?: CSSProperties;
  value: FlowRunResult;
};

export const FlowResultCard = (props: FlowResultCardProps) => {
  const { style, value } = props;
  const theme = flowCategoryToTheme(value.category);

  const timeText = useMemo(() => {
    return `${value.executeTime}ms`;
  }, [value.executeTime]);

  return (
    <div
      className={css`
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 2px;
        background: white;
        border-radius: 4px;
        border: 1px solid grey;
        padding: 8px;
      `}
      style={style}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          gap: 8px;
        `}
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
          <div style={{ fontSize: 16, textTransform: "capitalize" }}>
            {value.category}
          </div>
        </div>
      </div>

      <div>{value.result}</div>

      {!value.executing && (
        <div
          className={css`
            display: flex;
            flex-direction: row;
            gap: 8px;
            margin-top: 8px;
          `}
        >
          <Chip color="grey" text={timeText} />
          <ResultChip success={value.success} />
        </div>
      )}
    </div>
  );
};
