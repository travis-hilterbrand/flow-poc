import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { GetSchemaResponse } from "../api/schema";
import { MockNodeSchema } from "./schema";
import { GetProjectsResponse } from "../api/projects";
import { MockProjects } from "./projects";

const handlers = [
  // schema
  http.get<object, object, GetSchemaResponse>("/v1/schema", async () => {
    return HttpResponse.json({ nodes: MockNodeSchema });
  }),
  // projects
  http.get<object, object, GetProjectsResponse>("/v1/projects", async () => {
    return HttpResponse.json({ projects: MockProjects });
  }),
];
export const worker = setupWorker(...handlers);
