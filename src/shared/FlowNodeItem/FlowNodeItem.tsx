import { useState } from "react";
import "./style.css";
import { FlowNodeItemProps } from "./types";
import { Contents } from "./Contents";
import { Toolbar } from "./Toolbar";

const TOOLBAR_HEIGHT = 75;

export const FlowNodeItem = (props: FlowNodeItemProps) => {
  const { forceToolbarOpen = false } = props;

  const [toolbarOpen, setToolbarOpen] = useState(false);

  return (
    <div
      className={"flow-node-item-container"}
      onMouseEnter={() => setToolbarOpen(true)}
      onMouseLeave={() => setToolbarOpen(false)}
    >
      <Toolbar
        {...props}
        toolbarHeight={TOOLBAR_HEIGHT}
        toolbarOpen={toolbarOpen || forceToolbarOpen}
      />
      <Contents {...props} />
    </div>
  );
};
