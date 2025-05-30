import { useGetProjects } from "../hooks/useGetProjects";
import { useGetSchema } from "../hooks/useGetSchema";

export const MainView = () => {
  const { data: schema } = useGetSchema();
  const { data: projects } = useGetProjects();
  return <div>{JSON.stringify({ schema, projects })}</div>;
};
