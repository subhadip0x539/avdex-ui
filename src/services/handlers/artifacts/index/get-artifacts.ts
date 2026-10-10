import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useHttpClient } from "@/providers/http-client-provider";
import type { QueryOptions } from "@/types/query";
import { endpoints } from "@/services/endpoints";
import {
  parse,
  type Response,
  type Request,
} from "@/services/parsers/artifacts/index/get-artifacts";
import type { HttpClient } from "@/lib/http-client";

export const getArtifacts = async (http: HttpClient, payload: Request) => {
  const response = await http.get<Response>(
    endpoints.ARTIFACTS_INDEX_GET_ARTIFACTS,
    {
      params: payload.params,
    },
  );

  const data = parse(response.data);

  return data;
};

export type Data = Awaited<ReturnType<typeof getArtifacts>>;

export type Params = { sort?: string };

export const payload = (params: Params): Request => {
  const { sort } = params;

  return {
    params: {
      sort,
    },
  };
};

export const useGetArtifactsQuery = (
  params: Params,
  options: QueryOptions<Data> = {},
) => {
  const { queryKey = [], onSuccess, onError, enabled } = options;

  const http = useHttpClient();

  const { data, error, isLoading, isRefetching } = useQuery<Data>({
    queryKey,
    queryFn: () => getArtifacts(http, payload(params)),
    enabled,
  });

  useEffect(() => {
    data && onSuccess?.(data);
  }, [data, onSuccess]);

  useEffect(() => {
    error && onError?.(error);
  }, [error, onError]);

  return { data, error, isLoading, isRefetching };
};
