import { HTMLProps, ReactNode } from "react";
import { css } from "@emotion/css";
import "./style.css";
import { getTextColor } from "../../theme/Theme";
import { grey, pink } from "@mui/material/colors";

export type ButtonVariants = "border" | "round" | "transparent";

type BaseProps = Pick<
  HTMLProps<HTMLButtonElement>,
  "className" | "id" | "style" | "onBlur" | "onFocus" | "onClick"
>;
export type ButtonProps = BaseProps & {
  icon?: () => ReactNode;
  label?: string;
  variant?: ButtonVariants;
  onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  const { className, label, icon, variant = "transparent", ...rest } = props;
  return (
    <button
      type="button"
      className={[
        className,
        "button",
        `variant-${variant}`,
        css`
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
        `,
      ].join(" ")}
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
