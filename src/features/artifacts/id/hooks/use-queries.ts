import { queryKey } from "@/constants/query-key.const";
import { useGetArtifactQuery } from "@/services/handlers/artifacts/id/get-artifact";

export const useQueries = (id?: string) => {
  const {
    data: artifact,
    isLoading: isGetArtifactLoading,
    isRefetching: isGetArtifactRefetching,
  } = useGetArtifactQuery(
    { id: id! },
    {
      queryKey: [
        queryKey.ARTIFACTS,
        queryKey.ARTIFACTS_ID,
        queryKey.ARTIFACTS_ID_GET_ARTIFACT,
      ],
      enabled: !!id,
    },
  );

  const hasData = !!artifact;
  const isLoading = isGetArtifactLoading;
  const isRefetching = isGetArtifactRefetching;

  return {
    data: { artifact },
    hasData,
    isLoading,
    loading: { isGetArtifactLoading },
    refetching: { isGetArtifactRefetching },
    isRefetching,
  };
};
