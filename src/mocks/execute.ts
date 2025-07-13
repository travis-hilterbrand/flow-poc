import { Edge } from "@xyflow/react";
import {
  FlowNode,
  FlowRunInterimResults,
  FlowRunResult,
  FlowRunResults,
} from "types";
import { executeAction } from "./action";

const LOG_ROOT = "[executeFlow]";

const copyResults = (results: FlowRunResults) => {
  return JSON.parse(JSON.stringify(results));
};

type ExecuteFlowParams = {
  edges: Edge[];
  nodes: FlowNode[];
};
type ProcessQueueItem = {
  nodeId: string;
};

/*
  this is a simple simulator to run flows

  the focus of this POC is exploring UI so no need to spend lots of time on this
  real implementation will trigger BE flow with intermediate results (via SSE or socket)
*/
export async function* executeFlow(
  params: ExecuteFlowParams
): AsyncGenerator<FlowRunResults> {
  const { edges, nodes } = params;

  const startTime = Date.now();

  const results: FlowRunResults = {
    success: false,
    executing: true,
    totalExecuteTime: 0,
    results: [],
  };

  results.executing = true;
  yield copyResults(results);

  let flowSuccess = true;
  const processQueue: ProcessQueueItem[] = [];
  const interimResults: FlowRunInterimResults = {};

  const processNode = async (node: FlowNode, nodeResult: FlowRunResult) => {
    const actionResult = await executeAction(node.data, edges, interimResults);
    nodeResult.executeTime = actionResult.executeTime;
    nodeResult.executing = false;
    nodeResult.error = actionResult.error;
    nodeResult.success = actionResult.success;
    nodeResult.result = actionResult.result;
    if (actionResult.success) {
      interimResults[node.data.id] = {
        nodeId: node.data.id,
        result: actionResult.result,
      };
    } else {
      flowSuccess = false;
    }
    console.info(`${LOG_ROOT} executeAction(${node.data.id})`, actionResult);

    const outputEdges = edges.filter((item) => item.source === node.data.id);
    for (const edge of outputEdges) {
      if (!processQueue.find((item) => item.nodeId === edge.target)) {
        processQueue.push({ nodeId: edge.target });
      }
    }
  };

  // find input nodes
  const inputNodes: FlowNode[] = [];
  for (const node of nodes) {
    const hasEdge = edges.find((item) => item.target === node.data.id);
    if (!hasEdge) {
      inputNodes.push(node);
    }
  }
  console.info(`${LOG_ROOT} inputNodes`, inputNodes);

  // process input nodes
  for (const inputNode of inputNodes) {
    const nodeResult: FlowRunResult = {
      category: inputNode.schema.category,
      error: "",
      success: false,
      executeTime: 0,
      executing: true,
      result: "",
    };
    results.results.push(nodeResult);
    yield copyResults(results);

    await processNode(inputNode, nodeResult);
    yield copyResults(results);
  }

  // continue
  while (processQueue.length > 0) {
    const queueItem = processQueue.shift();
    if (!queueItem) break;

    const node = nodes.find((item) => item.data.id === queueItem.nodeId);
    if (!node) throw new Error("unexpected process error");

    const nodeResult: FlowRunResult = {
      category: node.schema.category,
      error: "",
      success: false,
      executeTime: 0,
      executing: true,
      result: "",
    };
    results.results.push(nodeResult);
    yield copyResults(results);

    await processNode(node, nodeResult);
    yield copyResults(results);
  }

  results.totalExecuteTime = Date.now() - startTime;
  results.executing = false;
  results.success = flowSuccess;
  yield copyResults(results);
}
