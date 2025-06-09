import { HTMLProps } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export type SearchVariants = "round" | "transparent";

type BaseProps = Pick<
  HTMLProps<HTMLInputElement>,
  "className" | "id" | "placeholder" | "style" | "onBlur" | "onFocus"
>;
export type SearchProps = BaseProps & {
  autoFocus?: boolean;
  defaultValue: string;
  onChange?: (newValue: string) => void;
  onEnter?: () => void;
};

export const Search = (props: SearchProps) => {
  const { autoFocus, className, defaultValue, onChange, onEnter, ...rest } =
    props;
  return (
    <TextField
      autoFocus={autoFocus}
      autoComplete={"off"}
      className={className}
      defaultValue={defaultValue}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
      variant="outlined"
      onChange={(event) => {
        if (onChange) {
          onChange(event.currentTarget.value);
        }
      }}
      onKeyUp={(event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.code === "Enter" && onEnter) {
          onEnter();
        }
      }}
      {...rest}
    />
  );
};
