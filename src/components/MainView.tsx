import { AddNodePanel } from "./AddNodePanel";
import { FlowNodeCanvas } from "./FlowNodeCanvas/FlowNodeCanvas";

export const MainView = () => {
  return (
    <>
      <FlowNodeCanvas />
      <AddNodePanel />
    </>
  );
};
