import { AddNodePanel } from "./AddNodePanel/AddNodePanel";
import { FlowNodeCanvas } from "./FlowNodeCanvas/FlowNodeCanvas";
import { ResultsPanel } from "./ResultsPanel/ResultsPanel";

export const MainView = () => {
  return (
    <>
      <FlowNodeCanvas />
      <AddNodePanel />
      <ResultsPanel />
    </>
  );
};
