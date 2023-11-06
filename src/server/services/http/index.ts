import { HttpMethods } from "./types";

export const httpRequest = async <T>(
  url: string,
  method: HttpMethods,
  body?: URLSearchParams,
): Promise<T> => {
  const response = await fetch(url, {
    method,
    body,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as T;
};

export const get = (url: string) => httpRequest(url, HttpMethods.GET);

export const post = (url: string, body: URLSearchParams) =>
  httpRequest(url, HttpMethods.POST, body);
