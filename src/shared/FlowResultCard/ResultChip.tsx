import { Chip } from "shared/Chip/Chip";
import { FlowResultCardProps } from "./FlowResultCard";

export type ResultChipProps = Pick<FlowResultCardProps, "style"> & {
  success: boolean;
};

export const ResultChip = (props: ResultChipProps) => {
  const { style, success } = props;
  return (
    <Chip
      color={success ? "green" : "red"}
      text={success ? "Success" : "Fail"}
      style={style}
    />
  );
};
