import { ReactNode } from "react";
import { FlowNodeSchema } from "../../types";

export type FlowNodeItemProps = {
  children?: ReactNode;
  className?: string;
  collapsed: boolean;
  forceToolbarOpen?: boolean;
  selected: boolean;
  schema: FlowNodeSchema;
  onChangeCollapse?: (newValue: boolean) => void;
  onDeleteNode?: () => void;
  onDuplicateNode?: () => void;
};
