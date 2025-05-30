import { HttpImp } from "../http/http";
import { Http } from "../http/types";
import { Flow } from "../types";

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
}

const httpRoot = new HttpImp({
  rootUrl: `/v1`,
});
export const flowsService = new FlowsService(httpRoot);
