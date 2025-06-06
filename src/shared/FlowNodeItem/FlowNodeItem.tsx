import { getTextColor } from "../../theme/Theme";
import { FlowNodeSchema } from "../../types";
import { Button } from "../Button/Button";
import {
  flowCategoryToIcon,
  flowCategoryToTheme,
  flowThemeToBackground,
} from "../FlowThemes";
import { IconChip } from "../IconChip/IconChip";
import "./style.css";
import CollapseIcon from "@mui/icons-material/CloseFullscreen";
import ExpandIcon from "@mui/icons-material/OpenInFull";

export interface FlowNodeItemProps {
  collapsed: boolean;
  selected: boolean;
  schema: FlowNodeSchema;
  onChangeCollapse?: (newValue: boolean) => void;
}

export const FlowNodeItem = (props: FlowNodeItemProps) => {
  const { collapsed, selected, schema, onChangeCollapse = () => {} } = props;
  const theme = flowCategoryToTheme(schema.category);

  return (
    <div
      className="flow-node-item"
      style={{
        border: `2px solid ${
          selected ? flowThemeToBackground(theme, "light") : "#eee"
        }`,
      }}
    >
      <div
        className="flow-node-item-top"
        style={{ background: flowThemeToBackground(theme, "light") }}
      >
        <IconChip
          background={flowThemeToBackground(theme, "dark")}
          color={getTextColor()}
          icon={flowCategoryToIcon(schema.category)}
          size={52}
        />
        <div className="flow-node-item-top-middle">
          <div className="name">{schema.name}</div>
          <div className="description">{schema.description}</div>
        </div>
        <div className="flow-node-item-top-right">
          <Button
            icon={() => (collapsed ? <ExpandIcon /> : <CollapseIcon />)}
            variant={"transparent"}
            onClick={() => onChangeCollapse(!collapsed)}
          />
        </div>
      </div>
      {!collapsed && <div className="flow-node-item-content"></div>}
    </div>
  );
};
