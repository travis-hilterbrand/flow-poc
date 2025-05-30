import { Flow, FlowResults } from "../types";
import { MockNodeSchemaInput } from "./schema";

export const MockFlow: Flow = {
  id: "default",
  flows: [{ properties: { name: "Test value" }, type: "Input" }],
};

export const MockFlowResults: FlowResults = {
  results: [
    {
      node: MockFlow.flows[0],
      nodeSchema: MockNodeSchemaInput,
      result: "Test result",
      runtime: 800,
    },
  ],
};
