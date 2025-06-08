import { FlowNodeSchema } from "../types";

export const MockNodeSchemaInput: FlowNodeSchema = {
  category: "input",
  description: "Entry point for basic input values.",
  id: "Input",
  name: "Input",
  properties: [{ name: "value", required: true }],
  tags: ["input"],
};
export const MockNodeSchemaOutput: FlowNodeSchema = {
  category: "output",
  description: "Test node for basic output",
  id: "Output",
  name: "Output",
  properties: [],
  tags: ["output"],
};

export const MockNodeSchema: Record<string, FlowNodeSchema> = {
  Input: MockNodeSchemaInput,
  Output: MockNodeSchemaOutput,
};
