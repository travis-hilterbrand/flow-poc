import { useMemo } from "react";
import { FlowNodeProperty, FlowNodePropertyDataMap } from "types";
import { FlowNodePropertyInputString } from "./FlowNodePropertyInputString";

export type FlowNodePropertyInputProps = {
  nodeData: FlowNodePropertyDataMap;
  property: FlowNodeProperty;
  onChange: (property: FlowNodeProperty, newValue: any) => void;
};
export const FlowNodePropertyInput = (props: FlowNodePropertyInputProps) => {
  const { nodeData, property, onChange } = props;
  // TODO - can be expanded with other types (string, number, enum, etc)
  // assumes string for now

  const dataString: string = useMemo(() => {
    return typeof nodeData[property.name] === "string"
      ? nodeData[property.name]
      : "";
  }, [nodeData, property]);
  return (
    <FlowNodePropertyInputString
      data={dataString}
      property={property}
      onChange={(property, newValue) => {
        onChange(property, newValue);
      }}
    />
  );
};
