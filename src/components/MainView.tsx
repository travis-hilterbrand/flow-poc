import { AddNodePanel } from "./AddNodePanel/AddNodePanel";
import { FlowNodeCanvas } from "./FlowNodeCanvas/FlowNodeCanvas";

export const MainView = () => {
  return (
    <>
      <FlowNodeCanvas />
      <AddNodePanel />
    </>
  );
};
