import type { Data } from "@/services/handlers/artifacts/id/get-artifact";
import { Button } from "@heroui/react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export interface ArtifactProps {
  data?: Data;
}

export function Info({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-xs font-light text-muted">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}

export function Artifact(props: ArtifactProps) {
  const { data } = props;

  if (!data) return <></>;

  return (
    <div className="flex gap-4 px-4 py-8 border-b">
      <div className="relative h-[340px] w-[240px] overflow-hidden rounded-md border-none p-0">
        <img
          alt="profile"
          className="absolute h-full w-full object-cover inset-0"
          src={data.image}
        />
      </div>
      <div className="flex flex-col gap-8 justify-between">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-semibold tracking-tight">{data.name}</h1>
          <div className="flex gap-8">
            {data.birthdate && (
              <Info label="BIRTHDATE" value={`${data.birthdate}`} />
            )}
            {data.age && <Info label="AGE" value={`${data.age}Y`} />}
            {data.height && <Info label="HEIGHT" value={data.height} />}
            {data.measurements && (
              <Info
                label="MEASUREMENTS"
                value={`${data.measurements.chest}-${data.measurements.waist}-${data.measurements.hips}`}
              />
            )}
            {data.extra?.cup && <Info label="CUP" value={data.extra.cup} />}
          </div>
        </div>
        <div className="flex gap-2">
          {data.sites?.map((s) => (
            <Link
              key={s.id}
              to={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ all: "unset" }}
            >
              <Button size="sm" className="text-xs rounded-md bg-accent/25">
                <ExternalLink size={14} />
                {s.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
