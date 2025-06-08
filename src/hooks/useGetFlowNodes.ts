import { useEffect, useState } from "react";
import {
  FlowEdgeInternal,
  FlowNodeInternal,
} from "../components/FlowNodeCanvas/types";
import { MockFlow } from "../mocks/flows";
import { FlowEdgeData, FlowNode, FlowNodeData } from "../types";
import { useGetSchema } from "./useGetSchema";
import { GetSchemaResponse } from "../api/schema";
import { useFlowStore } from "store/useFlowStore";

const LOG_ROOT = "[useGetFlowNodes]";

const externalToInternalEdge = (value: FlowEdgeData): FlowEdgeInternal => {
  return {
    ...value,
    animated: true,
    type: "smoothstep",
  };
};
const edgeListToInternal = (data: FlowEdgeData[]): FlowEdgeInternal[] => {
  return data.map((data) => externalToInternalEdge(data));
};

const externalToInternalNode = (value: FlowNode): FlowNodeInternal => {
  const { data, schema } = value;
  return {
    id: data.id,
    type: "FlowNodeBase",
    position: data.position,
    data: {
      node: {
        data,
        schema,
      },
    },
  };
};
const flowListToInternal = (
  flowData: FlowNodeData[],
  schema: GetSchemaResponse
): FlowNodeInternal[] => {
  if (schema) {
    const nodes: Array<FlowNodeInternal | null> = flowData.map((data) => {
      const nodeSchema = schema.nodesSchema[data.type];
      if (nodeSchema) {
        const flowNode: FlowNode = {
          data,
          schema: nodeSchema,
        };
        return externalToInternalNode(flowNode);
      }
      console.warn(
        `${LOG_ROOT} schema(${data.type}) not found for ${data.id}`,
        data
      );
      return null;
    });
    return nodes.filter((item) => item !== null);
  }
  return [];
};

export const useGetFlowNodes = () => {
  const [loaded, setLoaded] = useState(false);
  const { setEdgesList, setNodesList } = useFlowStore();

  const edgesData = MockFlow.edges;
  useEffect(() => {
    setEdgesList(edgeListToInternal(edgesData));
  }, [edgesData, setEdgesList]);

  const { data: schema } = useGetSchema();
  const nodesData = MockFlow.nodes;
  useEffect(() => {
    if (schema && !loaded) {
      const result: FlowNodeInternal[] = flowListToInternal(nodesData, schema);
      setNodesList(result);
      setLoaded(true);
    }
  }, [loaded, nodesData, schema, setNodesList]);

  return { loaded };
};
