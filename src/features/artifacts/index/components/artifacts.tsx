import { ProfileCard } from "@/components/profile-card";
import type { Data } from "@/services/handlers/artifacts/index/get-artifacts";
import type { Site } from "@/types/common";
import { Button } from "@heroui/react";
import { Calendar, ExternalLink, Heart, Pencil } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface ArtifactsProps {
  data?: Data;
}

interface ContentProps {
  id: string;
  age?: number;
  height?: number;
  extra?: Record<string, string>;
  domain?: Site;
}

export function Content(props: ContentProps) {
  const { age, extra, domain } = props;

  return (
    <div className="flex flex-col gap-4 justify-between w-full">
      <div className="flex gap-2 text-muted-foreground items-center flex-wrap">
        {age && (
          <div className="flex gap-2 items-center text-muted">
            <Calendar size={14} />
            <span className="text-xs">{age}Y</span>
          </div>
        )}
        {extra?.cup && (
          <div className="flex gap-2 items-center text-muted">
            <Heart size={14} />
            <span className="text-xs">{extra.cup}</span>
          </div>
        )}
      </div>
      <div className="min-h-8">
        {domain && (
          <Link to={domain.url} style={{ all: "unset" }} target="_blank">
            <Button size="sm" className="text-xs rounded-md bg-accent/25">
              <ExternalLink size={14} />
              {domain.name}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export function Artifacts(props: ArtifactsProps) {
  const { data } = props;

  const navigate = useNavigate();

  if (!data) return <></>;

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
      {data.map((d) => (
        <ProfileCard
          key={d.id}
          title={d.name}
          image={d.image}
          content={<Content {...d} />}
          onClick={() => {
            navigate(`/app/portal/artifacts/${d.id}`);
          }}
        />
      ))}
    </div>
  );
}
