import { useQuery } from "@tanstack/react-query";
import { GetSchemaResponse, schemaService } from "../api/schema";

export const useGetSchema = () => {
  const { data, isError, error, isLoading, refetch } =
    useQuery<GetSchemaResponse>({
      queryKey: ["schema"],
      queryFn: () => schemaService.getSchema(),
      retry: 0,
    });
  return { data, isError, error, isLoading, refetch };
};
