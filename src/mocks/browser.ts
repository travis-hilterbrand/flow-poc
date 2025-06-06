import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { GetSchemaResponse } from "../api/schema";
import { MockNodeSchema } from "./schema";
import { sleep } from "../utils";

const handlers = [
  // schema
  http.get<object, object, GetSchemaResponse>("/v1/schema", async () => {
    await sleep(300);
    return HttpResponse.json({ nodesSchema: MockNodeSchema });
  }),
];
export const worker = setupWorker(...handlers);
