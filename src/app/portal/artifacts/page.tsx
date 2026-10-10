import { LoadingOverlay } from "@/components/loading-overlay";
import { Artifacts } from "@/features/artifacts/index/components/artifacts";
import { Header } from "@/features/artifacts/index/components/header";
import { useCleanup } from "@/features/artifacts/index/hooks/use-cleanup";
import { useQueries } from "@/features/artifacts/index/hooks/use-queries";
import { useArtifactsStore } from "@/store/artifacts.slice";

export function ArtifactsPage() {
  const {
    indexCtrl: ctrl,
    actions: { setIndexCtrl: setCtrl },
  } = useArtifactsStore();

  const {
    data: { artifacts },
    isLoading,
  } = useQueries(ctrl);

  useCleanup();

  if (isLoading) return <LoadingOverlay />;

  return (
    <div className="flex flex-col gap-4 p-4">
      <Header ctrl={ctrl} setCtrl={setCtrl} />
      <div className="overflow-auto">
        <Artifacts data={artifacts} />
      </div>
    </div>
  );
}
