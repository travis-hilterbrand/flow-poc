import { FlowEdgeData, FlowNodeData } from "../types";

export const MockFlow: {
  edges: FlowEdgeData[];
  nodes: FlowNodeData[];
} = {
  edges: [
    {
      id: "1=>2",
      source: "1",
      target: "2",
    },
  ],
  nodes: [
    {
      id: "1",
      collapsed: false,
      position: { x: 100, y: 0 },
      properties: {},
      type: "Input",
    },
    {
      id: "2",
      collapsed: false,
      position: { x: 235, y: 500 },
      properties: {},
      type: "Output",
    },
  ],
};
