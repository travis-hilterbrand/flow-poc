import { useState } from "react";
import { Button } from "shared/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import { Contents } from "./Contents";

export const AddNodePanel = () => {
  const [open, setOpen] = useState(false);

  if (open) {
    return <Contents onClose={() => setOpen(false)} />;
  }
  return (
    <Button
      icon={() => <AddIcon />}
      style={{ position: "absolute", top: 40, left: 16 }}
      variant="round"
      onClick={() => setOpen(true)}
    />
  );
};
