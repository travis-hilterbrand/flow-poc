import {
  applyEdgeChanges,
  applyNodeChanges,
  EdgeChange,
  NodeChange,
  OnEdgesChange,
  OnNodesChange,
} from "@xyflow/react";
import { create } from "zustand";
import {
  FlowEdgeInternal,
  FlowNodeInternal,
} from "components/FlowNodeCanvas/types";

type FlowStore = {
  edgesList: FlowEdgeInternal[];
  setEdgesList: (value: FlowEdgeInternal[]) => void;
  onEdgesChange: OnEdgesChange<FlowEdgeInternal>;
  nodesList: FlowNodeInternal[];
  setNodesList: (value: FlowNodeInternal[]) => void;
  onNodesChange: OnNodesChange<FlowNodeInternal>;
};

export const useFlowStore = create<FlowStore>()((set, get) => ({
  edgesList: [],
  setEdgesList: (value: FlowEdgeInternal[]) => {
    set(() => ({ edgesList: value }));
  },
  onEdgesChange: (changes: EdgeChange<FlowEdgeInternal>[]) => {
    set({
      edgesList: applyEdgeChanges<FlowEdgeInternal>(changes, get().edgesList),
    });
    console.info(`onEdgesChange`, JSON.stringify({ changes }));
  },

  nodesList: [],
  setNodesList: (value: FlowNodeInternal[]) => {
    set(() => ({ nodesList: value }));
  },
  onNodesChange: (changes: NodeChange<FlowNodeInternal>[]) => {
    set({
      nodesList: applyNodeChanges<FlowNodeInternal>(changes, get().nodesList),
    });
    console.info(`onNodesChange`, JSON.stringify({ changes }));
  },
}));

export const flowStoreSelector = (state: FlowStore) => ({
  edgesList: state.edgesList,
  setEdgesList: state.setEdgesList,
  onEdgesChange: state.onEdgesChange,
  nodesList: state.nodesList,
  setNodesList: state.setNodesList,
  onNodesChange: state.onNodesChange,
});
