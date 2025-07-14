export type FlowEdgeData = {
  id: string;
  source: string;
  target: string;
};

// TODO - expand this with more property types
export type FlowNodePropertyString = string;

export type FlowNodePropertyDataMap = Record<string, FlowNodePropertyString>;
export type FlowNodeData = {
  id: string;
  collapsed: boolean;
  position: {
    x: number;
    y: number;
  };
  properties: FlowNodePropertyDataMap;
  type: string;
};

export type FlowNodeProperty = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
};

export type FlowNodeCategories = "input" | "output" | "processor";

export type FlowThemes = "blue" | "grey" | "yellow";

export type FlowNodeSchema = {
  category: FlowNodeCategories;
  description: string;
  id: string;
  name: string;
  properties: FlowNodeProperty[];
  tags: string[];
};

export type FlowNode = {
  data: FlowNodeData;
  schema: FlowNodeSchema;
};

export type FlowRunResult = {
  category: FlowNodeCategories;
  error: string;
  success: boolean;
  executing: boolean;
  executeTime: number;
  result: string;
};
export type FlowRunResults = {
  success: boolean;
  executing: boolean;
  totalExecuteTime: number;
  results: FlowRunResult[];
};

export type FlowRunInterimResult = {
  nodeId: string;
  result: string;
};
export type FlowRunInterimResults = Record<string, FlowRunInterimResult>;
