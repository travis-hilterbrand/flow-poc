import { HttpImp } from "../http/http";
import { Http } from "../http/types";
import { Project } from "../types";

export type GetProjectsResponse = {
  projects: Project[];
};

export class ProjectsService {
  private baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = "/projects";
  }

  public getProjects = (): Promise<GetProjectsResponse> => {
    return this.http.get({
      url: `${this.baseUrl}`,
    });
  };
}

const httpRoot = new HttpImp({
  rootUrl: `/v1`,
});
export const projectsService = new ProjectsService(httpRoot);
