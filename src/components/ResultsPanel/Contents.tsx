import { SidePanel } from "shared/SidePanel/SidePanel";

type ContentsProps = {
  visible: boolean;
  onClose: () => void;
};
export const Contents = ({ visible, onClose }: ContentsProps) => {
  return (
    <SidePanel side="right" visible={visible} onClose={() => onClose()}>
      Results <hr />
    </SidePanel>
  );
};
