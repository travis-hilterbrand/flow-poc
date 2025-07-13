import { FlowEdgeData, FlowNodeData } from "../types";

export const MockFlowComplex: {
  edges: FlowEdgeData[];
  nodes: FlowNodeData[];
} = {
  edges: [
    {
      id: "1=>combine",
      source: "input-1",
      target: "combine",
    },
    {
      id: "2=>combine",
      source: "input-2",
      target: "combine",
    },
    {
      id: "combine=>out",
      source: "combine",
      target: "out",
    },
  ],
  nodes: [
    {
      id: "input-1",
      collapsed: false,
      position: { x: 100, y: 0 },
      properties: { defaultValue: "Input from 1" },
      type: "Input",
    },
    {
      id: "input-2",
      collapsed: false,
      position: { x: 650, y: 0 },
      properties: { defaultValue: "Input from 2" },
      type: "Input",
    },
    {
      id: "combine",
      collapsed: false,
      position: { x: 235, y: 500 },
      properties: {},
      type: "CombineText",
    },
    {
      id: "out",
      collapsed: false,
      position: { x: 235, y: 1000 },
      properties: {},
      type: "Output",
    },
  ],
};

export const MockFlowSimple: {
  edges: FlowEdgeData[];
  nodes: FlowNodeData[];
} = {
  edges: [
    {
      id: "1",
      source: "input-1",
      target: "out",
    },
  ],
  nodes: [
    {
      id: "input-1",
      collapsed: false,
      position: { x: 100, y: 0 },
      properties: { defaultValue: "Input from" },
      type: "Input",
    },
    {
      id: "out",
      collapsed: false,
      position: { x: 100, y: 500 },
      properties: {},
      type: "Output",
    },
  ],
};

export const MockFlowTwoInput: {
  edges: FlowEdgeData[];
  nodes: FlowNodeData[];
} = {
  edges: [
    {
      id: "1",
      source: "input-1",
      target: "out",
    },
    {
      id: "2",
      source: "input-2",
      target: "out",
    },
  ],
  nodes: [
    {
      id: "input-1",
      collapsed: false,
      position: { x: 100, y: 0 },
      properties: { defaultValue: "Input from 1" },
      type: "Input",
    },
    {
      id: "input-2",
      collapsed: false,
      position: { x: 625, y: 0 },
      properties: { defaultValue: "Input from 2" },
      type: "Input",
    },
    {
      id: "out",
      collapsed: false,
      position: { x: 100, y: 500 },
      properties: {},
      type: "Output",
    },
  ],
};
