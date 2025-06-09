import { useState } from "react";
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

  return (
    <SidePanel side="left" visible={visible} onClose={() => onClose()}>
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
    </SidePanel>
  );
};
