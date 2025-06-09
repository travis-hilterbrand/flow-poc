import { Edge } from "@xyflow/react";
import { FlowNodeInternal } from "components/FlowNodeCanvas/types";
import { useCallback } from "react";
import { v4 } from "uuid";
import { useFlowStore } from "store/useFlowStore";
import { FlowNodeSchema } from "types";
import { externalToInternalNode } from "./useGetFlowNodes";

const LOG_ROOT = "[useFlowNodes]";

export const useFlowNodes = () => {
  const { edgesList, nodesList, setEdgesList, setNodesList } = useFlowStore();

  const onAddNode = (schema: FlowNodeSchema) => {
    const newNode: FlowNodeInternal = externalToInternalNode({
      data: {
        id: v4(),
        collapsed: false,
        position: { x: 0, y: 0 },
        properties: [],
        type: schema.id,
      },
      schema,
    });
    const newNodeList = [...nodesList];
    newNodeList.push(newNode);
    setNodesList(newNodeList);

    console.info(`${LOG_ROOT} onAddNode(${newNode.id}, ${schema.id})`);
  };

  const onDeleteNode = (id: string) => {
    const newEdgeList = [...edgesList].filter(
      (item) => item.target !== id && item.source !== id
    );
    setEdgesList(newEdgeList);
    const newNodeList = [...nodesList].filter((item) => item.id !== id);
    setNodesList(newNodeList);
    console.info(`${LOG_ROOT} onDeleteNode(${id})`);
  };

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

  return {
    edgesList,
    nodesList,
    onAddNode,
    onDeleteNode,
    onChangeCollapse,
    onChangeEdgesInternal,
  };
};
