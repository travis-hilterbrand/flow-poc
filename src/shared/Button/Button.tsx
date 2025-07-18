import { HTMLProps, ReactNode } from "react";
import { css } from "@emotion/css";
import "./style.css";
import { getTextColor } from "../../theme/Theme";
import { grey, pink } from "@mui/material/colors";

export type ButtonVariants = "action" | "border" | "round" | "transparent";

type BaseProps = Pick<
  HTMLProps<HTMLButtonElement>,
  "className" | "id" | "style" | "onBlur" | "onFocus" | "onClick"
>;
export type ButtonProps = BaseProps & {
  enabled?: boolean;
  icon?: () => ReactNode;
  label?: string;
  variant?: ButtonVariants;
  onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  const {
    className,
    enabled = true,
    label,
    icon,
    variant = "transparent",
    ...rest
  } = props;
  return (
    <button
      type="button"
      className={[
        className,
        "button",
        `variant-${variant}`,
        css`
          &.variant-action {
            border-color: ${pink[500]};
            background: ${pink[400]};
            color: white;
          }
          &.variant-border {
            border-color: ${grey[500]};
            background: white;
            color: ${getTextColor()};
          }
          &.variant-round {
            border-radius: 50%;
            padding: 8px;
            background: ${pink[400]};
            color: white;
          }
          &.variant-transparent {
            background: transparent;
            color: ${getTextColor()};
          }

          opacity: ${enabled ? 1.0 : 0.2};
          cursor: ${enabled ? "pointer" : "auto"};
        `,
      ].join(" ")}
      disabled={!enabled}
      {...rest}
    >
      {label && (
        <span
          className={css`
            margin-right: ${icon ? 4 : 0}px;
          `}
        >
          {label}
        </span>
      )}
      {icon && icon()}
    </button>
  );
};
