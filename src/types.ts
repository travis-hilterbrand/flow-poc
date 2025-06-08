import { StandardAPIErrorWithDetail } from "./http/errors";

export type FlowEdgeData = {
  id: string;
  source: string;
  target: string;
};
export type FlowNodeData = {
  id: string;
  collapsed: boolean;
  position: {
    x: number;
    y: number;
  };
  properties: Record<string, any>;
  type: string;
};

export type FlowNodeProperty = {
  name: string;
  required: boolean;
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

export type FlowResultErrorDetail = {
  results: { success: boolean; error: string }[];
};
export type FlowResultError = StandardAPIErrorWithDetail<FlowResultErrorDetail>;
