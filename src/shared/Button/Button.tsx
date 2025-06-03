import { HTMLProps, ReactNode } from "react";
import { css } from "@emotion/css";
import "./style.css";
import { getTextColor } from "../FlowThemes";

export type ButtonVariants = "transparent";

type BaseProps = Pick<
  HTMLProps<HTMLButtonElement>,
  "id" | "style" | "onBlur" | "onFocus" | "onClick"
>;
export type ButtonProps = BaseProps & {
  icon?: () => ReactNode;
  label?: string;
  variant?: ButtonVariants;
  onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  const { label, icon, variant = "transparent", ...rest } = props;
  return (
    <button
      type="button"
      className={[
        "button",
        `variant-${variant}`,
        css`
          &.variant-transparent {
            background: transparent;
            color: ${getTextColor()};
          }
        `,
      ].join(" ")}
      {...rest}
    >
      {label}
      {icon && icon()}
    </button>
  );
};
