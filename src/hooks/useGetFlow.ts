import { skipToken, useQuery } from "@tanstack/react-query";
import { flowsService, GetFlowResponse } from "../api/flows";

export const useGetFlow = (id: string | undefined) => {
  const { data, isError, error, isLoading, refetch } =
    useQuery<GetFlowResponse>({
      enabled: typeof id === "string",
      queryKey: ["flow", id],
      queryFn:
        typeof id === "string" ? () => flowsService.getFlow(id) : skipToken,
      retry: 0,
    });
  return { data, isError, error, isLoading, refetch };
};
