export interface IHandleURL {
  url: string;
  param: string;
  value: string;
}
export const handleURL = ({ url, param, value }: IHandleURL): string => {
  return url.split(`:${param}`).join(value);
};
