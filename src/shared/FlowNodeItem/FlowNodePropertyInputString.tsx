import { FormInput } from "shared/FormInput/FormInput";
import { FlowNodeProperty, FlowNodePropertyString } from "types";

export type FlowNodePropertyInputProps = {
  data: FlowNodePropertyString;
  property: FlowNodeProperty;
  onChange: (property: FlowNodeProperty, newValue: string) => void;
};
export const FlowNodePropertyInputString = (
  props: FlowNodePropertyInputProps
) => {
  const { data, property, onChange } = props;
  return (
    <FormInput
      key={property.name}
      defaultValue={data}
      label={property.label}
      placeholder={property.placeholder}
      required={property.required}
      style={{ width: "100%" }}
      onChange={(newValue) => {
        onChange(property, newValue);
      }}
    />
  );
};
