import type { Edge, Node } from "@xyflow/react";
import { FlowNode } from "../../types";

export type FlowEdgeInternal = Omit<Edge, "animated" | "type"> & {
  animated: true;
  type: "smoothstep";
};
export type FlowNodeInternal = Omit<Node, "data" | "type"> & {
  data: { node: FlowNode };
  type: "FlowNodeBase";
};

export type FlowNodeBaseType = Node<{ node: FlowNode }, "FlowNodeBase">;
export type AppNodes = FlowNodeBaseType;
