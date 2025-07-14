import { css } from "@emotion/css";
import { grey } from "@mui/material/colors";
import { Button } from "shared/Button/Button";
import { SidePanel } from "shared/SidePanel/SidePanel";
import { flowStoreSelector, useFlowStore } from "store/useFlowStore";
import { useShallow } from "zustand/react/shallow";
import { useFlowNodesRun } from "hooks/useFlowNodesRun";
import { FlowResultCard } from "shared/FlowResultCard/FlowResultCard";
import { ResultChip } from "shared/FlowResultCard/ResultChip";

type ContentsProps = {
  visible: boolean;
  onClose: () => void;
};
export const Contents = ({ visible, onClose }: ContentsProps) => {
  const { edgesList, nodesList } = useFlowStore(useShallow(flowStoreSelector));
  const { results, running, runFlow } = useFlowNodesRun();

  return (
    <SidePanel side="right" visible={visible} onClose={() => onClose()}>
      <div
        className={css`
          height: 100%;
          overflow: hidden;
          width: 100%;
          display: grid;
          grid-template-rows: 68px 1fr;
        `}
      >
        <div
          className={css`
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid ${grey[500]};
            padding: 16px;
          `}
        >
          <div
            className={css`
              display: inline-flex;
              flow-direction: column;
              gap: 8px;
            `}
          >
            <span>Results</span>
            {!results.executing && results.results.length > 0 && (
              <ResultChip success={results.success} />
            )}
          </div>
          <div
            className={css`
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 4px;
            `}
          >
            <Button
              enabled={!running}
              label="Run"
              variant={"action"}
              onClick={() => {
                runFlow({ edgesList, nodesList });
              }}
            />
          </div>
        </div>

        <div
          className={css`
            width: 100%;
            overflow: hidden auto;
            padding: 8px 16px;
          `}
        >
          {results.results.map((item, index) => (
            <FlowResultCard
              key={`${index}-${item.category}`}
              value={item}
              style={{ marginBottom: 16 }}
            />
          ))}
        </div>
      </div>
    </SidePanel>
  );
};
