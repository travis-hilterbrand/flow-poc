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
    {
      id: "2=>3",
      source: "2",
      target: "3",
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
      type: "CombineText",
    },
    {
      id: "3",
      collapsed: false,
      position: { x: 235, y: 1000 },
      properties: {},
      type: "Output",
    },
  ],
};
