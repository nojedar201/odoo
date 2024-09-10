import { AxiosInstance } from 'axios';
import { $Fetch, FetchOptions } from 'ofetch';

/** Options for the SDK module */
export interface Options {

  /** The API URL of the client-side environment */
  apiUrl: string;

  /** Custom fetch instance */
  ofetch?: $Fetch;
  ofetchOptions?: FetchOptions;
}
