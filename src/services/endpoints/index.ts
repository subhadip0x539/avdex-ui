import { queryKey } from "@/constants/query-key.const";

export const endpoints = {
  [queryKey.ARTIFACTS_INDEX_GET_ARTIFACTS]: "/v1/artifacts",
  [queryKey.ARTIFACTS_ID_GET_ARTIFACT]: "v1/artifacts/:id",
};
