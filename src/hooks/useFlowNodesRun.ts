import { useState } from "react";
import {
  FlowEdgeInternal,
  FlowNodeInternal,
} from "components/FlowNodeCanvas/types";
import { FlowRunResults } from "types";
import { executeFlow } from "mocks/execute";
import { sleep } from "utils";

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
    const generator = executeFlow({ edges: [], nodes: [] });
    for await (const result of generator) {
      console.info(`${LOG_ROOT} runFlow() step`, JSON.stringify(result));
      setResults(result);
      await sleep(1000);
    }

    /*
    setResults({
      ...results,
      executing: true,
      results: [
        {
          category: "input",
          error: "",
          success: true,
          executing: true,
          executeTime: 0,
        },
      ],
    });
    await sleep(750);
    setResults({
      ...results,
      results: [
        {
          category: "input",
          error: "",
          success: true,
          executing: false,
          executeTime: 750,
        },
        {
          category: "input",
          error: "",
          success: true,
          executing: true,
          executeTime: 0,
        },
      ],
    });
    */
  };

  return { runFlow, running: results.executing };
};
