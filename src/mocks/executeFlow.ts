import { FlowNodeRun, FlowResults } from "../types";

export const executeFlow = async (
  _nodes: FlowNodeRun[],
  _startNode?: string
): Promise<FlowResults> => {
  const results: FlowResults = { results: [] };
  // TODO
  return results;
};
