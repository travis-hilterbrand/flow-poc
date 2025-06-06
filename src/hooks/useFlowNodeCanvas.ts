import { useNodesState, useEdgesState } from "@xyflow/react";
import { useEffect } from "react";

export const useFlowNodeCanvas = () => {
  const [edges, , onEdgesChange] = useEdgesState([]);
  const [nodes, , onNodesChange] = useNodesState([
    {
      id: "1",
      type: "item-base",
      position: { x: 0, y: 0 },
      data: { label: "Node 1" },
    },
  ]);
  /*
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
*/

  useEffect(() => {
    console.info(`edges changed`, edges);
  }, [edges]);
  useEffect(() => {
    console.info(`nodes changed`, nodes);
  }, [nodes]);

  return { edges, nodes, onEdgesChange, onNodesChange };
};
