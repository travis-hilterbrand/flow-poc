import { Edge } from "@xyflow/react";
import { useCallback, useMemo, useState } from "react";
import {
  FlowEdgeInternal,
  FlowNodeInternal,
} from "../components/FlowNodeCanvas/types";
import { MockFlow } from "../mocks/flows";
import { FlowEdgeData, FlowNode, FlowNodeData } from "../types";
import { useGetSchema } from "./useGetSchema";
import { GetSchemaResponse } from "../api/schema";

const LOG_ROOT = "[useFlowNodes]";

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

export const useFlowNodes = () => {
  const [loaded, setLoaded] = useState(false);

  const edgesData = MockFlow.edges;
  const edgesList: FlowEdgeInternal[] = useMemo(() => {
    return edgeListToInternal(edgesData);
  }, [edgesData]);

  const { data: schema } = useGetSchema();
  const nodesData = MockFlow.nodes;
  const nodesList: FlowNodeInternal[] = useMemo(() => {
    if (schema) {
      const result: FlowNodeInternal[] = flowListToInternal(nodesData, schema);
      setLoaded(true);
      return result;
    }
    return [];
  }, [nodesData, schema]);

  const onEdgesInternalChange = useCallback((_newEdges: Edge[]) => {
    // triggered when users connect/disconnect nodes
    // TODO - persist
  }, []);

  return { edgesList, loaded, nodesList, onEdgesInternalChange };
};
