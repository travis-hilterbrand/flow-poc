import { css } from "@emotion/css";
import { red } from "@mui/material/colors";
import { FlowNodeItemProps } from "./types";
import { Button } from "shared/Button/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";

type ToolbarProps = FlowNodeItemProps & {
  toolbarHeight: number;
  toolbarOpen: boolean;
};
export const Toolbar = (props: ToolbarProps) => {
  const { toolbarHeight, toolbarOpen, onDeleteNode, onDuplicateNode } = props;
  return (
    <div
      className={css`
        position: absolute;
        top: -${toolbarHeight}px;
        left: 0;
        right: 0;
        height: ${toolbarOpen ? toolbarHeight : 0}px;
        width: 500px;
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        overflow: hidden;
        padding: 20px 60px 0 60px;
      `}
    >
      <Button
        icon={() => <ContentCopyIcon />}
        label={"Duplicate"}
        variant={"border"}
        onClick={() => {
          if (onDuplicateNode) {
            onDuplicateNode();
          }
        }}
      />
      <Button
        icon={() => <DeleteIcon />}
        label={"Delete"}
        style={{ color: red[500] }}
        variant={"border"}
        onClick={() => {
          if (onDeleteNode) {
            onDeleteNode();
          }
        }}
      />
    </div>
  );
};
