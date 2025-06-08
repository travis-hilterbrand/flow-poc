import { Edge } from "@xyflow/react";
import { useCallback } from "react";
import { useFlowStore } from "store/useFlowStore";

const LOG_ROOT = "[useFlowNodes]";

export const useFlowNodes = () => {
  const { edgesList, nodesList, setNodesList } = useFlowStore();

  const onChangeCollapse = useCallback(
    (params: { id: string; newValue: boolean }) => {
      console.info(
        `${LOG_ROOT} onChangeCollapse(${params.id}, ${params.newValue})`
      );
      const newNodeList = [...nodesList];
      const node = newNodeList.find(
        (item) => item.data.node.data.id === params.id
      );
      if (node) {
        node.data.node.data.collapsed = params.newValue;
        setNodesList(newNodeList);
      }
    },
    [nodesList, setNodesList]
  );
  const onChangeEdgesInternal = useCallback((_newEdges: Edge[]) => {
    // triggered when users connect/disconnect nodes
    // TODO - persist
  }, []);

  return { edgesList, nodesList, onChangeCollapse, onChangeEdgesInternal };
};
