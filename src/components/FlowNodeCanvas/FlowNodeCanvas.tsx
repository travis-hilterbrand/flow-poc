import { ReactFlow, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useFlowNodeCanvas } from "../../hooks/useFlowNodeCanvas";
import { nodeTypes } from "./FlowNodes";

type FlowNodeCanvasProps = {
  //flow: Flow;
};
export const FlowNodeCanvas = (_props: FlowNodeCanvasProps) => {
  const {
    edges,
    nodes,
    onEdgesChange,
    onNodesChange,
    onConnect,
    onNodeDragStop,
  } = useFlowNodeCanvas();

  return (
    <ReactFlow
      fitView
      edges={edges}
      nodes={nodes}
      nodeTypes={nodeTypes}
      onConnect={onConnect}
      onEdgesChange={onEdgesChange}
      onNodeDragStop={onNodeDragStop}
      onNodesChange={onNodesChange}
    >
      <Background />
      <Controls orientation={"horizontal"} position={"bottom-right"} />
    </ReactFlow>
  );
};
