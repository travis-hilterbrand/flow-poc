import { css } from "@emotion/css";
import { useEffect, useRef, useState } from "react";
import { Search } from "shared/Search/Search";
import { useFlowNodes } from "hooks/useFlowNodes";
import { useSearchSchema } from "hooks/useSearchSchema";
import { NodeSchemaCard } from "shared/NodeSchemaCard/NodeSchemaCard";
import { SidePanel } from "shared/SidePanel/SidePanel";

type ContentsProps = {
  visible: boolean;
  onClose: () => void;
};
export const Contents = ({ visible, onClose }: ContentsProps) => {
  const { onAddNode } = useFlowNodes();
  const [filterTerm, setFilterTerm] = useState("");
  const { filteredSchema } = useSearchSchema(filterTerm);

  const searchRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (visible && searchRef.current) {
      searchRef.current.querySelector("input")?.focus();
    }
  }, [visible]);

  return (
    <SidePanel side="left" visible={visible} onClose={() => onClose()}>
      <div
        className={css`
          height: 100%;
          width: 100%;
          overflow: hidden;
          padding: 16px;
        `}
      >
        <Search
          ref={searchRef}
          defaultValue=""
          style={{ flexShrink: 0, width: "100%", marginBottom: 16 }}
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
    </SidePanel>
  );
};
