import { Edge } from "@xyflow/react";
import { FlowNodeData, FlowRunInterimResults } from "types";
import { sleep } from "../utils";

export type ActionResult = {
  error: string;
  success: boolean;
  executeTime: number;
  result: string;
};

export const executeAction = async (
  node: FlowNodeData,
  edges: Edge[],
  results: FlowRunInterimResults
): Promise<ActionResult> => {
  // see execute for caveats & POC design choices
  const startTime = Date.now();
  try {
    if (node.type === "Input") {
      await sleep(100);
      return Promise.resolve({
        error: "",
        success: true,
        executeTime: Date.now() - startTime,
        result: node.properties["defaultValue"],
      });
    } else if (node.type === "CombineText") {
      await sleep(200);

      const resultsString: string[] = [];
      const edgesMatch = edges.filter((item) => item.target === node.id);
      for (const edge of edgesMatch) {
        if (edge && results[edge.source]) {
          resultsString.push(results[edge.source].result);
        }
      }
      return Promise.resolve({
        error: "",
        success: true,
        executeTime: Date.now() - startTime,
        result: resultsString.join("\n"),
      });
    } else if (node.type === "Output") {
      await sleep(100);

      let result = "";
      let error = false;
      const edge = edges.find((item) => item.target === node.id);
      if (edge && results[edge.source]) {
        result = results[edge.source].result;
      } else {
        error = true;
      }
      return Promise.resolve({
        error: error ? "No input" : "",
        success: !error,
        executeTime: Date.now() - startTime,
        result,
      });
    }
    return Promise.resolve({
      error: "Node not implemented",
      success: false,
      executeTime: 100,
      result: "",
    });
  } catch (error) {
    const errorString = typeof error === "string" ? error : "unknown";
    return Promise.resolve({
      error: errorString,
      success: false,
      executeTime: Date.now() - startTime,
      result: "",
    });
  }
};
