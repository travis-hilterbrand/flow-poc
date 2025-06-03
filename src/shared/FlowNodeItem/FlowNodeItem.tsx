import { getTextColor } from "../../theme/Theme";
import { FlowNodeSchema } from "../../types";
import {
  flowCategoryToIcon,
  flowCategoryToTheme,
  flowThemeToBackground,
} from "../FlowThemes";
import { IconChip } from "../IconChip/IconChip";
import "./style.css";

export interface FlowNodeItemProps {
  collapsed: boolean;
  schema: FlowNodeSchema;
}

export const FlowNodeItem = (props: FlowNodeItemProps) => {
  const { schema } = props;
  const theme = flowCategoryToTheme(schema.category);

  return (
    <div
      className="flow-node-item"
      style={{ background: flowThemeToBackground(theme, "light") }}
    >
      <div className="top">
        <IconChip
          background={flowThemeToBackground(theme, "dark")}
          color={getTextColor()}
          icon={flowCategoryToIcon(schema.category)}
          size={52}
        />
        <div className="top-right">
          <div className="name">{schema.name}</div>
          <div className="description">{schema.description}</div>
        </div>
      </div>
    </div>
  );
};
