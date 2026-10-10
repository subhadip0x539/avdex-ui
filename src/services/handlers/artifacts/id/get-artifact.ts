import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useHttpClient } from "@/providers/http-client-provider";
import type { QueryOptions } from "@/types/query";
import { endpoints } from "@/services/endpoints";
import {
  parse,
  type Request,
  type Response,
} from "@/services/parsers/artifacts/id/get-artifact";
import type { HttpClient } from "@/lib/http-client";

export const getArtifact = async (http: HttpClient, request: Request) => {
  const response = await http.get<Response>(
    endpoints.ARTIFACTS_ID_GET_ARTIFACT,
    {
      path: request.path,
    },
  );

  const data = parse(response.data);

  return data;
};

export type Data = Awaited<ReturnType<typeof getArtifact>>;

export type Params = { id: string };

export const payload = (params: Params): Request => {
  const { id } = params;

  return {
    path: {
      id,
    },
  };
};

export const useGetArtifactQuery = (
  params: Params,
  options: QueryOptions<Data> = {},
) => {
  const { queryKey = [], onSuccess, onError, enabled } = options;

  const http = useHttpClient();

  const { data, error, isLoading, isRefetching } = useQuery<Data>({
    queryKey,
    queryFn: () => getArtifact(http, payload(params)),
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
