import { css } from "@emotion/css";
import { forwardRef } from "react";
import { getTextColor } from "../../theme/Theme";
import { Button } from "../Button/Button";
import {
  flowCategoryToIcon,
  flowCategoryToTheme,
  flowThemeToBackground,
} from "../FlowThemes";
import { IconChip } from "../IconChip/IconChip";
import CollapseIcon from "@mui/icons-material/CloseFullscreen";
import ExpandIcon from "@mui/icons-material/OpenInFull";
import { FlowNodeItemProps } from "./types";
import { FlowNodePropertyInput } from "./FlowNodePropertyInput";

export const Contents = forwardRef<HTMLDivElement, FlowNodeItemProps>(
  (props, ref) => {
    const {
      children,
      className,
      collapsed,
      data,
      selected,
      schema,
      onChangeCollapse = () => {},
      onChangeData = () => {},
    } = props;
    const theme = flowCategoryToTheme(schema.category);

    return (
      <div
        ref={ref}
        className={["flow-node-item", className].join(" ")}
        style={{
          border: `2px solid ${
            selected ? flowThemeToBackground(theme, "light") : "#eee"
          }`,
        }}
      >
        <div
          className="flow-node-item-card"
          style={{ background: flowThemeToBackground(theme, "light") }}
        >
          <div className="flow-node-item-top">
            <IconChip
              background={flowThemeToBackground(theme, "dark")}
              color={getTextColor()}
              icon={flowCategoryToIcon(schema.category)}
              size={52}
            />
            <div className="flow-node-item-top-middle">
              <div className="category">{schema.category}</div>
              <div className="name">{schema.name}</div>
            </div>
            <div className="flow-node-item-top-right">
              <Button
                icon={() => (collapsed ? <ExpandIcon /> : <CollapseIcon />)}
                variant={"transparent"}
                onClick={() => onChangeCollapse(!collapsed)}
              />
            </div>
          </div>
          <div
            className={[
              "flow-node-item-bottom",
              css`
                display: ${collapsed ? "none" : "block"};
              `,
            ].join(" ")}
          >
            <div className="description">{schema.description}</div>
          </div>
        </div>
        {!collapsed && (
          <div className="flow-node-item-content">
            {schema.properties.map((item) => (
              <FlowNodePropertyInput
                key={item.name}
                nodeData={data}
                property={item}
                onChange={onChangeData}
              />
            ))}
          </div>
        )}
        {children}
      </div>
    );
  }
);
