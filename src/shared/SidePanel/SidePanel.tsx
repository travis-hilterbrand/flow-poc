import { css } from "@emotion/css";
import CloseIcon from "@mui/icons-material/Close";
import { ReactNode } from "react";
import { Button } from "shared/Button/Button";

const CloseButton = ({ onClose }: { onClose: () => void }) => (
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
);

type SidePanelProps = {
  children: ReactNode;
  side: "left" | "right";
  visible?: boolean;
  onClose: () => void;
};
export const SidePanel = (props: SidePanelProps) => {
  const { children, side, visible = true, onClose } = props;
  const left = visible ? 24 : -500;
  const right = visible ? 24 : -500;
  return (
    <div
      className={css`
        position: absolute;
        bottom: 16px;
        top: 16px;
        display: grid;
        gap: 8px;
        transition: all 300ms;
      `}
      style={{
        left: side === "left" ? left : undefined,
        right: side === "right" ? right : undefined,
        gridTemplateColumns: side === "left" ? `375px 50px` : `50px 375px`,
      }}
    >
      {side === "right" && <CloseButton onClose={onClose} />}
      <div
        className={css`
          height: 100%;
          border: 2px solid grey;
          border-radius: 8px;
          background: white;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        `}
      >
        {children}
      </div>
      {side === "left" && <CloseButton onClose={onClose} />}
    </div>
  );
};
