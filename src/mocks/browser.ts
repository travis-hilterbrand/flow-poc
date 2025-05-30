import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { GetSchemaResponse } from "../api/schema";
import { MockNodeSchema } from "./schema";
import { GetProjectsResponse } from "../api/projects";
import { MockProjects } from "./projects";
import { MockFlow, MockFlowResults } from "./flows";
import { sleep } from "../utils";

const handlers = [
  // schema
  http.get<object, object, GetSchemaResponse>("/v1/schema", async () => {
    await sleep(300);
    return HttpResponse.json({ nodes: MockNodeSchema });
  }),
  // projects
  http.get<object, object, GetProjectsResponse>("/v1/projects", async () => {
    await sleep(300);
    return HttpResponse.json({ data: MockProjects });
  }),
  // flows
  http.get<{ id: string }>("/v1/flows/:id", async (req) => {
    const { id } = req.params;
    if (id === "default") {
      return HttpResponse.json(MockFlow);
    }
    return new HttpResponse(null, {
      status: 404,
    });
  }),
  http.put<{ id: string }>("/v1/flows/:id/execute", async (req) => {
    const { id } = req.params;
    if (id === "default") {
      await sleep(800);
      return HttpResponse.json(MockFlowResults);
    }
    return new HttpResponse(null, {
      status: 404,
    });
  }),
];
export const worker = setupWorker(...handlers);
