import { useEffect, useState } from "react";
import { useGetProjects } from "../hooks/useGetProjects";
import { useGetSchema } from "../hooks/useGetSchema";
import { useGetFlow } from "../hooks/useGetFlow";
import { flowsService } from "../api/flows";

export const MainView = () => {
  const [flowId, setFlowId] = useState<string | undefined>();

  const { data: schema } = useGetSchema();
  const { data: projects } = useGetProjects();
  const { data: flow } = useGetFlow(flowId);

  useEffect(() => {
    if (projects && projects.data && projects.data.length > 0) {
      setFlowId(projects.data[0].flow);
    }
  }, [projects]);

  const executeFlow = async (flowId: string) => {
    await flowsService.executeFlow(flowId);
  };
  useEffect(() => {
    if (flowId) {
      executeFlow(flowId);
    }
  }, [flowId]);

  return <div>{JSON.stringify({ flow, schema })}</div>;
};
