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
import { FormInput } from "shared/FormInput/FormInput";

export const Contents = forwardRef<HTMLDivElement, FlowNodeItemProps>(
  (props, ref) => {
    const {
      children,
      className,
      collapsed,
      selected,
      schema,
      onChangeCollapse = () => {},
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
              <FormInput
                key={item.name}
                defaultValue=""
                label={item.label}
                placeholder={item.placeholder}
                required={item.required}
                style={{ width: "100%" }}
              />
            ))}
          </div>
        )}
        {children}
      </div>
    );
  }
);
