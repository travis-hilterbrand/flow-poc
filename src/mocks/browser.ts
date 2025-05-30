import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

export const worker = setupWorker(
  http.get("/test", async () => {
    return HttpResponse.json({});
  })
);
