import { useState } from "react";
import {
  FlowEdgeInternal,
  FlowNodeInternal,
} from "components/FlowNodeCanvas/types";
import { FlowNode, FlowRunResults } from "types";
import { executeFlow } from "mocks/execute";

const LOG_ROOT = "[useFlowNodesRun]";

type RunFlowParams = {
  edgesList: FlowEdgeInternal[];
  nodesList: FlowNodeInternal[];
};
export const useFlowNodesRun = () => {
  const [results, setResults] = useState<FlowRunResults>({
    success: false,
    executing: false,
    totalExecuteTime: 0,
    results: [],
  });

  const runFlow = async (params: RunFlowParams) => {
    console.info(`${LOG_ROOT} runFlow()`, params);

    const nodes: FlowNode[] = params.nodesList.map((item) => item.data.node);
    const generator = executeFlow({ edges: params.edgesList, nodes });
    let i = 0;
    for await (const result of generator) {
      console.info(`${LOG_ROOT} runFlow() step[${i}]`, JSON.stringify(result));
      setResults(result);
      i++;
    }
  };

  return { results, runFlow, running: results.executing };
};
