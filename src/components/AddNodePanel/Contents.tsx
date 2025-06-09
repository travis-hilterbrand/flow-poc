import { css } from "@emotion/css";
import { useState } from "react";
import { Button } from "shared/Button/Button";
import { Search } from "shared/Search/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useFlowNodes } from "hooks/useFlowNodes";
import { useSearchSchema } from "hooks/useSearchSchema";
import { NodeSchemaCard } from "shared/NodeSchemaCard/NodeSchemaCard";

type ContentsProps = {
  onClose: () => void;
};
export const Contents = ({ onClose }: ContentsProps) => {
  const { onAddNode } = useFlowNodes();
  const [filterTerm, setFilterTerm] = useState("");
  const { filteredSchema } = useSearchSchema(filterTerm);

  return (
    <div
      className={css`
        position: absolute;
        left: 0;
        bottom: 16px;
        top: 16px;
        width: 350px;
        display: grid;
        grid-template-columns: 300px 50px;
        gap: 8px;
      `}
    >
      <div
        className={css`
          height: 100%;
          border: 1px solid grey;
          border-radius: 4px;
          background: white;
          padding: 16px 8px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        `}
      >
        <Search
          autoFocus
          defaultValue=""
          style={{ flexShrink: 0 }}
          onChange={(newValue) => setFilterTerm(newValue)}
        />
        <div style={{ flex: 1, overflow: "hidden auto" }}>
          {filteredSchema.map((item) => {
            return (
              <NodeSchemaCard
                key={item.id}
                style={{ marginBottom: 8 }}
                value={item}
                onClick={(id) => {
                  onAddNode(id);
                  onClose();
                }}
              />
            );
          })}
        </div>
      </div>
      <Button
        icon={() => <CloseIcon />}
        style={{
          height: 44,
          width: 44,
          marginTop: 16,
          background: "white",
          border: "1px solid grey",
          borderRadius: 4,
        }}
        onClick={() => onClose()}
      />
    </div>
  );
};
