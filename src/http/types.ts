import { AxiosInstance } from "axios";
import { StandardAPIError } from "./errors";

export type ReqType = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
export interface HttpResponseError {
  reqType: ReqType;
  message: string;
  status: number;
  data?: StandardAPIError;
}

export interface QueryParams {
  [key: string]: string | number | boolean | undefined | string[];
}

export interface FetchParams {
  [key: string]:
    | number
    | string
    | string[]
    | boolean
    | FormData
    | { [key: string]: string | string[] }
    | { [key: string]: string | string[] }[]
    | FetchParams;
}

export interface GetParameters {
  url: string;
  query?: QueryParams;
}
export interface PostParameters {
  url: string;
  body?: FetchParams | FormData;
  cleanBody?: boolean;
  query?: QueryParams;
  signal?: AbortSignal;
}

export interface HttpConstructor {
  rootUrl: string;
}

export interface FetchAPI {
  url: string;
  query?: QueryParams;
  body?: FetchParams | FormData;
  signal?: AbortSignal;
}

export interface Http {
  get<T>(params: GetParameters): Promise<T>;
  post<T>(params: PostParameters): Promise<T>;
  put<T>(params: PostParameters): Promise<T>;
  buildUrl(url: string, query?: QueryParams): string;
  getProvider(): AxiosInstance;
}
