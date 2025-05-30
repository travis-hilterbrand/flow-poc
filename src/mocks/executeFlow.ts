import { FlowNodeRun, FlowResults } from "../types";

export const executeFlow = async (
  nodes: FlowNodeRun[],
  startNode?: string
): Promise<FlowResults> => {
  const results: FlowResults = { results: [] };
  return results;
};
