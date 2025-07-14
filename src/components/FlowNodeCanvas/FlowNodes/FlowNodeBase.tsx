import { Position, type NodeProps } from "@xyflow/react";
import { FlowNodeBaseType } from "../types";
import { FlowNodeBaseHandle } from "./FlowNodeBaseHandle";
import { FlowNodeItem } from "shared/FlowNodeItem";
import { useFlowNodes } from "hooks/useFlowNodes";
import { FlowNodeProperty } from "types";

export const FlowNodeBase = (props: NodeProps<FlowNodeBaseType>) => {
  const { data, selected } = props;

  const { onChangeCollapse, onChangeProperty, onDeleteNode } = useFlowNodes();

  return (
    <FlowNodeItem
      className={"react-flow__node-default"}
      collapsed={data.node.data.collapsed}
      data={data.node.data.properties}
      selected={selected}
      schema={data.node.schema}
      onChangeCollapse={(newValue: boolean) => {
        onChangeCollapse({ id: data.node.data.id, newValue });
      }}
      onChangeData={(property: FlowNodeProperty, newValue: any) => {
        onChangeProperty({ id: data.node.data.id, property, newValue });
      }}
      onDeleteNode={() => {
        onDeleteNode(data.node.data.id);
      }}
      onDuplicateNode={() => {
        alert("TODO");
      }}
    >
      <FlowNodeBaseHandle type="target" position={Position.Top} />
      <FlowNodeBaseHandle type="source" position={Position.Bottom} />
    </FlowNodeItem>
  );
};
