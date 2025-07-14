import { Handle, HandleProps } from "@xyflow/react";

type FlowNodeBaseHandleProps = HandleProps;
export const FlowNodeBaseHandle = (props: FlowNodeBaseHandleProps) => (
  <Handle {...props}
    style={{ background: '#fff', border: `1.3px solid #697282`, height: 12, width: 12  }}
  />
);
