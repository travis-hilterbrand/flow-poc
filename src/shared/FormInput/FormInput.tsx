import { HTMLProps } from "react";
import { TextField } from "@mui/material";

export type FormInputVariants = "round" | "transparent";

type BaseProps = Pick<
  HTMLProps<HTMLInputElement>,
  | "className"
  | "id"
  | "placeholder"
  | "required"
  | "style"
  | "onBlur"
  | "onFocus"
>;
export type FormInputProps = BaseProps & {
  autoFocus?: boolean;
  defaultValue: string;
  label?: string;
  onChange?: (newValue: string) => void;
};

export const FormInput = (props: FormInputProps) => {
  const {
    autoFocus = false,
    className,
    defaultValue,
    label,
    onChange,
    ...rest
  } = props;
  return (
    <TextField
      autoFocus={autoFocus}
      autoComplete={"off"}
      className={className}
      defaultValue={defaultValue}
      label={label}
      variant={"filled"}
      onChange={(event) => {
        if (onChange) {
          onChange(event.currentTarget.value);
        }
      }}
      {...rest}
    />
  );
};
