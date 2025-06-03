import { HttpImp } from "../http/http";
import { Http } from "../http/types";
import { FlowNodeSchema } from "../types";

export type GetSchemaResponse = {
  nodes: FlowNodeSchema[];
};

export class SchemaService {
  private baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = "/schema";
  }

  public getSchema = (): Promise<GetSchemaResponse> => {
    return this.http.get({
      url: `${this.baseUrl}`,
    });
  };
}

const httpRoot = new HttpImp({
  rootUrl: `/v1`,
});
export const schemaService = new SchemaService(httpRoot);
