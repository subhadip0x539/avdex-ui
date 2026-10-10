import { Card, cn } from "@heroui/react";

export interface ProfileCardProps {
  title?: string;
  image?: string;
  content?: React.ReactNode;
  action?: React.ReactNode;
  onClick?: () => void;
}

export function ProfileCard(props: ProfileCardProps) {
  const { title, image, content, onClick, action } = props;

  return (
    <Card
      className={cn(
        "group relative w-full h-[320px] overflow-hidden rounded-md border-none p-0",
        onClick ? "cursor-pointer" : "",
      )}
      onClick={() => onClick?.()}
    >
      <img
        alt="profile"
        className="absolute h-full w-full object-cover inset-0 transition-transform duration-300 ease-out group-hover:scale-110"
        src={image}
      />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-neutral-900/95 via-neutral-900/55 to-transparent" />
      {action && (
        <div
          className="absolute top-3 right-3 z-20 flex items-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          {action}
        </div>
      )}
      <Card.Footer className="z-10 mt-auto p-4 flex flex-col items-start gap-4">
        <Card.Title className="text-2xl">{title}</Card.Title>
        {content}
      </Card.Footer>
    </Card>
  );
}
