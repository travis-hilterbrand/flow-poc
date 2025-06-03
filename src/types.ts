import { StandardAPIErrorWithDetail } from "./http/errors";

export type FlowNodeProperty = {
  name: string;
  required: boolean;
};

export type FlowNodeCategories = "input" | "output" | "processor";

export type FlowThemes = "brown" | "grey" | "yellow";

export type FlowNodeSchema = {
  category: FlowNodeCategories;
  description: string;
  id: string;
  name: string;
  properties: FlowNodeProperty[];
  tags: string[];
};

export type FlowNode = {
  id: string;
  properties: Record<string, any>;
  type: string;
};
export type Flow = {
  flows: FlowNode[];
  id: string;
};
export type Project = {
  id: string;
  flow: string;
};

export type FlowResultErrorDetail = {
  results: { success: boolean; error: string }[];
};
export type FlowResultError = StandardAPIErrorWithDetail<FlowResultErrorDetail>;

export type FlowResult = {
  node: FlowNode;
  nodeSchema: FlowNodeSchema;
  result: string;
  runtime: number;
};
export type FlowResults = {
  results: FlowResult[];
};

export type FlowNodeRun = {
  node: FlowNode;
  nodeSchema: FlowNodeSchema;
};
