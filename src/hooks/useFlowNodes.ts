import { Edge } from "@xyflow/react";
import { useCallback } from "react";
import { useFlowStore } from "store/useFlowStore";

export const useFlowNodes = () => {
  const { edgesList, nodesList } = useFlowStore();

  const onEdgesInternalChange = useCallback((_newEdges: Edge[]) => {
    // triggered when users connect/disconnect nodes
    // TODO - persist
  }, []);

  return { edgesList, nodesList, onEdgesInternalChange };
};
