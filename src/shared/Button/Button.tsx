import { HTMLProps, ReactNode } from "react";
import { css } from "@emotion/css";
import "./style.css";
import { getTextColor } from "../../theme/Theme";
import { pink } from "@mui/material/colors";

export type ButtonVariants = "round" | "transparent";

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
          &.variant-round {
            border-radius: 50%;
            background: ${pink[400]};
            color: white;
          }
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
