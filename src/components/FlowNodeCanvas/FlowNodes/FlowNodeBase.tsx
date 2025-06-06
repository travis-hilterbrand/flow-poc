import { Position, type NodeProps } from "@xyflow/react";
import { FlowNodeBaseType } from "../types";
import { FlowNodeBaseHandle } from "./FlowNodeBaseHandle";

export const FlowNodeBase = (props: NodeProps<FlowNodeBaseType>) => {
  const { data } = props;

  return (
    <div className="react-flow__node-default">
      <div>{data.label}</div>
      <FlowNodeBaseHandle type="target" position={Position.Top} />
      <FlowNodeBaseHandle type="source" position={Position.Bottom} />
    </div>
  );
};
