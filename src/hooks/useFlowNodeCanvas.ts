import { OnConnect, OnNodeDrag, Node, addEdge } from "@xyflow/react";
import { MouseEvent, useCallback } from "react";
import { useGetFlowNodes } from "./useGetFlowNodes";
import { flowStoreSelector, useFlowStore } from "store/useFlowStore";
import { useShallow } from "zustand/react/shallow";
import { FlowEdgeInternal } from "components/FlowNodeCanvas/types";

const LOG_ROOT = "[useFlowNodeCanvas]";

export const useFlowNodeCanvas = () => {
  useGetFlowNodes();
  const { edgesList, setEdgesList, nodesList, onEdgesChange, onNodesChange } =
    useFlowStore(useShallow(flowStoreSelector));

  const onConnect: OnConnect = useCallback(
    (connection) => {
      const newEdges: FlowEdgeInternal[] = addEdge<FlowEdgeInternal>(
        connection,
        edgesList
      ).map((edge) => {
        return { ...edge, animated: true, type: "smoothstep" };
      });
      console.info(`${LOG_ROOT} onConnect()`, {
        connection,
        edgesList,
        newEdges,
      });
      setEdgesList(newEdges);
    },
    [edgesList, setEdgesList]
  );

  const onNodeDragStop: OnNodeDrag = useCallback(
    (event: MouseEvent, node: Node) => {
      console.info(`${LOG_ROOT} onNodeDragStop()`, { event, node });
      // TODO_PERSIST
    },
    []
  );

  return {
    edges: edgesList,
    nodes: nodesList,
    onEdgesChange,
    onNodesChange,
    onConnect,
    onNodeDragStop,
  };
};
