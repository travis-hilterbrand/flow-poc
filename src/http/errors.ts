export type StandardAPIError = {
  code: string;
  message: string;
};

export type StandardAPIErrorWithDetail<T> = {
  code: string;
  message: string;
  details: T;
};
