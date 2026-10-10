import { ProgressCircle } from "@heroui/react";

export function LoadingOverlay() {
  return (
    <div className="h-full w-full bg-background grid place-items-center">
      <ProgressCircle isIndeterminate>
        <ProgressCircle.Track>
          <ProgressCircle.TrackCircle />
          <ProgressCircle.FillCircle />
        </ProgressCircle.Track>
      </ProgressCircle>
    </div>
  );
}
