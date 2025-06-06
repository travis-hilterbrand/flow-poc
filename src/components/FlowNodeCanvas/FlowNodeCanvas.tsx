import { ReactFlow, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useFlowNodeCanvas } from "../../hooks/useFlowNodeCanvas";
import { nodeTypes } from "./FlowNodes";

type FlowNodeCanvasProps = {
  //flow: Flow;
};
export const FlowNodeCanvas = (_props: FlowNodeCanvasProps) => {
  const { edges, nodes, onConnect, onEdgesChange, onNodesChange } = useFlowNodeCanvas();

  return (
    <ReactFlow
      onConnect={onConnect}
      edges={edges}
      onEdgesChange={onEdgesChange}
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      fitView
    >
      <Background />
      <Controls orientation={"horizontal"} position={"bottom-right"} />
    </ReactFlow>
  );
};
