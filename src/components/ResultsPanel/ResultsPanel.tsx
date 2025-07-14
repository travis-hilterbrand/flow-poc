import { css } from "@emotion/css";
import TocIcon from "@mui/icons-material/Toc";
import { useState } from "react";
import { Button } from "shared/Button/Button";
import { Contents } from "./Contents";

export const ResultsPanel = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Contents visible={open} onClose={() => setOpen(false)} />
      <Button
        className={css`
          transition: opacity 600ms;
        `}
        icon={() => <TocIcon />}
        style={{
          position: "absolute",
          top: 40,
          right: 16,
          opacity: open ? 0 : 1,
        }}
        variant="round"
        onClick={() => setOpen(true)}
      />
    </>
  );
};
