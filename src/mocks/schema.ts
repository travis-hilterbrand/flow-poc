import { FlowNodeSchema } from "../types";

export const MockNodeSchemaInput: FlowNodeSchema = {
  category: "input",
  description: "Entry point for basic input values.",
  id: "Input",
  name: "Input",
  properties: [{ name: "value", required: true }],
  tags: ["input"],
};

export const MockNodeSchema: FlowNodeSchema[] = [MockNodeSchemaInput];
