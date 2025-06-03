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
  schema: FlowNodeSchema;
}

export const FlowNodeItem = (props: FlowNodeItemProps) => {
  const { schema } = props;
  const theme = flowCategoryToTheme(schema.category);

  return (
    <div className="flow-node-item">
      <IconChip
        background={flowThemeToBackground(theme, "light")}
        color={getTextColor()}
        icon={flowCategoryToIcon(schema.category)}
        size={52}
      />
    </div>
  );
};
