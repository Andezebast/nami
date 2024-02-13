export interface IApiResponse<T> {
  data: T | [];
  loading: boolean;
  error: string | null;
}
