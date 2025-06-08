import type { Node } from "@xyflow/react";
import { FlowNode } from "../../types";

export type FlowNodeBaseType = Node<{ node: FlowNode }, "FlowNodeBase">;
export type AppNodes = FlowNodeBaseType;
