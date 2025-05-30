export type NodeProperty = {
  name: string;
  required: boolean;
};

export type NodeTags = "input" | "output" | "processoor";

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
  flows: Flow[];
  id: string;
};
