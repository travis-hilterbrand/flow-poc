import { ReactNode } from "react";
import { ReactFlow, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useFlowNodeCanvas } from "../../hooks/useFlowNodeCanvas";
import { Flow, FlowNodeSchema } from "../../types";
import { nodeTypes } from "./FlowNodes";

type FlowNodeCanvasProps = {
  children?: ReactNode;
  flow: Flow;
  nodesSchema: FlowNodeSchema[];
};
export const FlowNodeCanvas = (props: FlowNodeCanvasProps) => {
  const { children, flow: _flow, nodesSchema: _nodesSchema } = props;

  const { edges, nodes, onEdgesChange, onNodesChange } = useFlowNodeCanvas();

  return (
    <ReactFlow
      edges={edges}
      onEdgesChange={onEdgesChange}
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      fitView
    >
      <Controls />
      {children}
    </ReactFlow>
  );
};
