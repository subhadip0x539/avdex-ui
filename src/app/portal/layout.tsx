import { Appbar } from "@/components/appbar";
import { Outlet } from "react-router-dom";

export function PortalLayout() {
  return (
    <div className="h-full flex flex-col">
      <Appbar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
