import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  isAxiosError,
  Method,
} from "axios";
import {
  FetchAPI,
  GetParameters,
  Http,
  HttpConstructor,
  HttpResponseError,
  QueryParams,
  ReqType,
} from "./types";
import { StandardAPIError } from "./errors";

const LOG_ROOT = "[HTTP]";

export class HttpImp implements Http {
  private baseUrl: string;
  protected requester: AxiosInstance;

  constructor({ rootUrl }: HttpConstructor) {
    this.baseUrl = rootUrl;
    this.requester = axios.create();
    this.requestInterceptor();
  }
  public get = <T>(params: GetParameters): Promise<T> => {
    return this.fetchApi<T>(params, "GET");
  };
  public post = <T>(params: GetParameters): Promise<T> => {
    return this.fetchApi<T>(params, "POST");
  };
  public put = <T>(params: GetParameters): Promise<T> => {
    return this.fetchApi<T>(params, "PUT");
  };

  public fetchApi = async <T>(params: FetchAPI, method: Method): Promise<T> => {
    const { url, query, body, signal } = params;

    try {
      const config: AxiosRequestConfig = {
        headers: {},
        method,
      };

      if (signal) {
        config.signal = signal;
      }

      if (body) {
        config.data = JSON.stringify(body);
      }

      const response = await this.requester(this.buildUrl(url, query), config);
      console.info(
        `${LOG_ROOT} ${config.method?.toUpperCase()} "${config.url}" success`
      );
      return response.data as T;
    } catch (error) {
      console.error(`${LOG_ROOT} error "${url}"`, JSON.stringify(error));
      throw this.buildError(error, method as ReqType);
    }
  };

  public getProvider(): AxiosInstance {
    return this.requester;
  }

  public buildError = (error: unknown, reqType: ReqType): HttpResponseError => {
    if (isAxiosError(error) && error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      let customError: StandardAPIError | undefined;
      if (typeof error.response.data === "object") {
        const data = error.response.data as StandardAPIError;
        if (typeof data.code === "string" && typeof data.message === "string") {
          customError = data;
        }
      }
      return {
        data: customError,
        message: customError?.message ? customError?.message : error.message,
        reqType,
        status: error.response.status,
      };
    } else if (isAxiosError(error) && error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
      return {
        message: error.message,
        reqType,
        status: error.request.status,
      };
    } else {
      return {
        message: "unexpected",
        reqType,
        status: 0,
      };
    }
  };

  public buildUrl = (url: string, query?: QueryParams): string => {
    const cleanedQueryStr = JSON.stringify(query || {}, this.cleanJSON);
    const queryJson = JSON.parse(cleanedQueryStr);
    const queryStr: string = new URLSearchParams(queryJson || {}).toString();
    return `${this.baseUrl}${url}${queryStr.length > 0 ? "?" + queryStr : ""}`;
  };

  private cleanJSON = (_: string, value?: string | number | boolean) => {
    if (value === null || value === undefined || value === "") {
      return undefined;
    }
    return value;
  };

  private requestInterceptor = (): void => {
    this.requester.interceptors.request.use(
      async (config) => {
        console.info(`[HTTP] ${config.method?.toUpperCase()} "${config.url}"`);
        const configHeaders: AxiosRequestHeaders = config.headers || {};
        config.headers = {
          ...configHeaders,
        } as AxiosRequestHeaders;

        if (!config.headers["Content-Type"]) {
          // force general content-type
          config.headers["Content-Type"] = "application/json";
        }
        const data = config.data;
        if (typeof FormData === "function" && data instanceof FormData) {
          // let browser set content-type
          delete config.headers["Content-Type"];
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  };
}
