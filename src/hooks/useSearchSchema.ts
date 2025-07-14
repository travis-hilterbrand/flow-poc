import { useMemo } from "react";
import { FlowNodeSchema } from "types";
import { useGetSchema } from "./useGetSchema";

export const useSearchSchema = (search: string) => {
  const { data } = useGetSchema();
  const items: FlowNodeSchema[] = useMemo(
    () => (data && data.nodesSchema ? Object.values(data.nodesSchema) : []),
    [data]
  );

  const filterTerm = search.toLowerCase().trim();
  const filteredSchema = items.filter((item) => {
    if (item.id.toLowerCase().indexOf(filterTerm) !== -1) {
      return true;
    }
    return false;
  });
  return { filteredSchema };
};
