import {
  FlowEdgeInternal,
  FlowNodeInternal,
} from "components/FlowNodeCanvas/types";
import { useState } from "react";

const LOG_ROOT = "[useFlowNodesRun]";

type RunFlowParams = {
  edgesList: FlowEdgeInternal[];
  nodesList: FlowNodeInternal[];
};
export const useFlowNodesRun = () => {
  const [running, setRunning] = useState(false);

  const runFlow = async (params: RunFlowParams) => {
    console.info(`${LOG_ROOT} runFlow()`, params);
    setRunning(true);
  };

  return { runFlow, running };
};
