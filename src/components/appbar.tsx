import { cn } from "@heroui/styles";

export function Appbar() {
  return (
    <header className={cn("border-b flex items-center px-4 h-16")}>
      <div>
        <h1 className="text-xl">
          <span>AV</span>
          <span className="text-accent">DEX</span>
        </h1>
      </div>
    </header>
  );
}
