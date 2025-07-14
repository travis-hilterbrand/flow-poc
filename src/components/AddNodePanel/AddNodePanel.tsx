import { css } from "@emotion/css";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Button } from "shared/Button/Button";
import { Contents } from "./Contents";

export const AddNodePanel = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Contents visible={open} onClose={() => setOpen(false)} />
      <Button
        className={css`
          transition: opacity 600ms;
        `}
        icon={() => <AddIcon />}
        style={{
          position: "absolute",
          top: 40,
          left: 16,
          opacity: open ? 0 : 1,
        }}
        variant="round"
        onClick={() => setOpen(true)}
      />
    </>
  );
};
