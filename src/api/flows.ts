import { HttpImp } from "../http/http";
import { FetchParams, Http } from "../http/types";
import { Flow, FlowResults } from "../types";

export type GetFlowResponse = Flow;

export class FlowsService {
  private baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = "/flows";
  }

  public getFlow = (id: string): Promise<GetFlowResponse> => {
    return this.http.get({
      url: `${this.baseUrl}/${id}`,
    });
  };
  public executeFlow = (
    flowId: string,
    startNode?: string
  ): Promise<FlowResults> => {
    return this.http.put({
      url: `${this.baseUrl}/${flowId}/execute`,
      body: { startNode } as FetchParams,
    });
  };
}

const httpRoot = new HttpImp({
  rootUrl: `/v1`,
});
export const flowsService = new FlowsService(httpRoot);
