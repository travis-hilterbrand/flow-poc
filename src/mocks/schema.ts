import { SchemaNode } from "../types";

export const MockNodeSchema: SchemaNode[] = [
  {
    description: "Entry point for basic input values.",
    id: "Input",
    name: "Input",
    properties: [{ name: "value", required: true }],
    tags: ["input"],
  },
];
