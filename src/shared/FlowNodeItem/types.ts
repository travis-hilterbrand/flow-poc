import { ReactNode } from "react";
import {
  FlowNodeProperty,
  FlowNodePropertyDataMap,
  FlowNodeSchema,
} from "../../types";

export type FlowNodeItemProps = {
  children?: ReactNode;
  className?: string;
  collapsed: boolean;
  data: FlowNodePropertyDataMap;
  forceToolbarOpen?: boolean;
  selected: boolean;
  schema: FlowNodeSchema;
  onChangeCollapse?: (newValue: boolean) => void;
  onChangeData: (property: FlowNodeProperty, newValue: any) => void;
  onDeleteNode?: () => void;
  onDuplicateNode?: () => void;
};
