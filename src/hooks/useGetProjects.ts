import { useQuery } from "@tanstack/react-query";
import { GetProjectsResponse, projectsService } from "../api/projects";

export const useGetProjects = () => {
  const { data, isError, error, isLoading, refetch } =
    useQuery<GetProjectsResponse>({
      queryKey: ["projects"],
      queryFn: () => projectsService.getProjects(),
      retry: 0,
    });
  return { data, isError, error, isLoading, refetch };
};
