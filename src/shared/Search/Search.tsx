import { forwardRef, HTMLProps } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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

export const Search = forwardRef<HTMLDivElement, SearchProps>((props, ref) => {
  const { autoFocus, className, defaultValue, onChange, onEnter, ...rest } =
    props;
  return (
    <TextField
      ref={ref}
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
});
