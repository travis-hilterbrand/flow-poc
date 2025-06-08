import {
  useNodesState,
  useEdgesState,
  OnConnect,
  addEdge,
  Edge,
} from "@xyflow/react";
import { useCallback, useEffect } from "react";
import { FlowNodeInternal } from "../components/FlowNodeCanvas/types";
import { useFlowNodes } from "./useFlowNodes";
import { useGetFlowNodes } from "./useGetFlowNodes";

export const useFlowNodeCanvas = () => {
  const { loaded } = useGetFlowNodes();
  const { edgesList, nodesList, onChangeEdgesInternal } = useFlowNodes();

  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [nodes, setNodes, onNodesChange] = useNodesState<FlowNodeInternal>([]);
  const onConnect: OnConnect = useCallback(
    (connection) => {
      setEdges((edges) => {
        const newEdges = addEdge(connection, edges).map((edge) => {
          return { ...edge, animated: true, type: "smoothstep" };
        });
        console.info(`onConnect()`, { connection, newEdges });
        onChangeEdgesInternal(newEdges);
        return newEdges;
      });
    },
    [setEdges, onChangeEdgesInternal]
  );

  useEffect(() => {
    if (loaded) {
      setEdges(edgesList);
    }
  }, [loaded, edgesList, setEdges]);
  useEffect(() => {
    if (loaded) {
      setNodes(nodesList);
    }
  }, [loaded, nodesList, setNodes]);

  useEffect(() => {
    if (loaded) console.info(`edges changed`, edges);
  }, [loaded, edges]);
  useEffect(() => {
    if (loaded) console.info(`nodes changed`, nodes);
  }, [loaded, nodes]);

  return { edges, nodes, onConnect, onEdgesChange, onNodesChange };
};
