import { Position, type NodeProps } from "@xyflow/react";
import { FlowNodeBaseType } from "../types";
import { FlowNodeBaseHandle } from "./FlowNodeBaseHandle";
import { FlowNodeItem } from "shared/FlowNodeItem/FlowNodeItem";
import { useFlowNodes } from "hooks/useFlowNodes";

export const FlowNodeBase = (props: NodeProps<FlowNodeBaseType>) => {
  const { data, selected } = props;

  const { onChangeCollapse } = useFlowNodes();

  return (
    <FlowNodeItem
      className={"react-flow__node-default"}
      collapsed={data.node.data.collapsed}
      selected={selected}
      schema={data.node.schema}
      onChangeCollapse={(newValue: boolean) => {
        onChangeCollapse({ id: data.node.data.id, newValue });
      }}
    >
      <FlowNodeBaseHandle type="target" position={Position.Top} />
      <FlowNodeBaseHandle type="source" position={Position.Bottom} />
    </FlowNodeItem>
  );
};
