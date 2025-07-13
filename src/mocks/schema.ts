import { FlowNodeSchema } from "../types";

export const MockNodeSchemaInput: FlowNodeSchema = {
  category: "input",
  description: "Entry point for basic input values.",
  id: "Input",
  name: "Basic Input",
  properties: [
    { label: "Default value", name: "defaultValue", required: true },
  ],
  tags: ["input"],
};
export const MockNodeSchemaSheets: FlowNodeSchema = {
  category: "input",
  description:
    "Read the content from a Google Sheets file and outputs a list of the data in each column.",
  id: "InputSheets",
  name: "Google Sheets Reader",
  properties: [],
  tags: ["input"],
};
export const MockNodeSchemaCombineText: FlowNodeSchema = {
  category: "processor",
  description: "Combines multiple inputs using a given format",
  id: "CombineText",
  name: "CombineText",
  properties: [],
  tags: ["processor"],
};
export const MockNodeSchemaOutput: FlowNodeSchema = {
  category: "output",
  description: "Test node for basic output",
  id: "Output",
  name: "Basic Output",
  properties: [],
  tags: ["output"],
};

const MockNodeSchemaArray: FlowNodeSchema[] = [
  MockNodeSchemaInput,
  MockNodeSchemaSheets,
  MockNodeSchemaCombineText,
  MockNodeSchemaOutput,
];

export const MockNodeSchema: Record<string, FlowNodeSchema> =
  MockNodeSchemaArray.reduce((acc, schema) => {
    acc[schema.id] = schema;
    return acc;
  }, {} as Record<string, FlowNodeSchema>);
