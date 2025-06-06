import { useNodesState, useEdgesState, OnConnect, addEdge, Edge, Node } from "@xyflow/react";
import { useCallback, useEffect } from "react";

export const useFlowNodeCanvas = () => {
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([
  { id: "1->2", source: "1", target: "2", animated: true, type: "smoothstep" },
  ]);
  const [nodes, , onNodesChange] = useNodesState<Node>([
    {
      id: "1",
      type: "FlowNodeBase",
      position: { x: 0, y: 0 },
      data: { label: "Node 1" },
    },
    {
      id: "2",
      type: "FlowNodeBase",
      position: { x: 0, y: 200 },
      data: { label: "Node 2" },
    },
  ]);
  const onConnect: OnConnect = useCallback(
    (connection) => {
      setEdges((edges) => {
        const newEdges = addEdge(connection, edges).map((edge) => {
          return { ...edge, animated: true };
        });
        console.info(`onConnect()`, { connection, newEdges });
        return newEdges;
      });
    },
    [setEdges]
  );

  useEffect(() => {
    console.info(`edges changed`, edges);
  }, [edges]);
  useEffect(() => {
    console.info(`nodes changed`, nodes);
  }, [nodes]);

  return { edges, nodes, onConnect, onEdgesChange, onNodesChange };
};
