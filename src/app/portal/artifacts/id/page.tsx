import { LoadingOverlay } from "@/components/loading-overlay";
import { Artifact } from "@/features/artifacts/id/components/artifact";
import { useCleanup } from "@/features/artifacts/id/hooks/use-cleanup";
import { useQueries } from "@/features/artifacts/id/hooks/use-queries";
import { useParams } from "react-router-dom";

export function ArtifactsIdPage() {
  const { id } = useParams();

  const {
    data: { artifact },
    isLoading,
  } = useQueries(id);

  useCleanup();

  if (isLoading) return <LoadingOverlay />;

  console.log(id, artifact);

  return (
    <div className="flex flex-col gap-2">
      <Artifact data={artifact} />
    </div>
  );
}
