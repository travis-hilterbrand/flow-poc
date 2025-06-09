import { create } from "zustand";
import {
  FlowEdgeInternal,
  FlowNodeInternal,
} from "components/FlowNodeCanvas/types";

type FlowStore = {
  edgesList: FlowEdgeInternal[];
  setEdgesList: (value: FlowEdgeInternal[]) => void;
  nodesList: FlowNodeInternal[];
  setNodesList: (value: FlowNodeInternal[]) => void;
};

export const useFlowStore = create<FlowStore>()((set) => ({
  edgesList: [],
  setEdgesList: (value: FlowEdgeInternal[]) => {
    set(() => ({ edgesList: value }));
  },
  nodesList: [],
  setNodesList: (value: FlowNodeInternal[]) =>
    set(() => ({ nodesList: value })),
}));

export const flowStoreSelector = (state: FlowStore) => ({
  edgesList: state.edgesList,
  nodesList: state.nodesList,
  setEdgesList: state.setEdgesList,
  setNodesList: state.setNodesList,
});
