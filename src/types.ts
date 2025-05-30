import { StandardAPIErrorWithDetail } from "./http/errors";

export type NodeProperty = {
  name: string;
  required: boolean;
};

export type NodeTags = "input" | "output" | "processor";

export type SchemaNode = {
  description: string;
  id: string;
  name: string;
  properties: NodeProperty[];
  tags: NodeTags[];
};

export type FlowNode = {
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
  nodeSchema: SchemaNode;
  result: string;
  runtime: number;
};
export type FlowResults = {
  results: FlowResult[];
};

export type FlowNodeRun = {
  node: FlowNode;
  nodeSchema: SchemaNode;
};
