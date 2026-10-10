import { queryKey } from "@/constants/query-key.const";
import { useGetArtifactsQuery } from "@/services/handlers/artifacts/index/get-artifacts";
import type { IndexCtrl as Ctrl } from "@/store/artifacts.slice";

export const useQueries = (ctrl: Ctrl) => {
  const { sort } = ctrl;

  const {
    data: artifacts,
    isLoading: isGetArtifactsLoading,
    isRefetching: isGetArtifactsRefetching,
  } = useGetArtifactsQuery(
    { sort },
    {
      queryKey: [
        queryKey.ARTIFACTS,
        queryKey.ARTIFACTS_INDEX,
        queryKey.ARTIFACTS_INDEX_GET_ARTIFACTS,
        { sort },
      ],
    },
  );

  const hasData = !!artifacts;
  const isLoading = isGetArtifactsLoading;
  const isRefetching = isGetArtifactsRefetching;

  return {
    data: { artifacts },
    hasData,
    isLoading,
    loading: { isGetArtifactsLoading },
    refetching: { isGetArtifactsRefetching },
    isRefetching,
  };
};
