import { Handle, Position, type NodeProps } from "@xyflow/react";
import { FlowNodeItemBaseType } from "../types";

export const FlowNodeItemBase = (_props: NodeProps<FlowNodeItemBaseType>) => {
  return (
    <div className="react-flow__node-default">
      <Handle type="source" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
