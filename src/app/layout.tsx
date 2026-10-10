import { ConfigProvider } from "@/providers/config-provider";
import { HttpClientProvider } from "@/providers/http-client-provider";
import { QueryClientProvider } from "@/providers/query-client-provider";
import { StoreProvider } from "@/providers/store-provider";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <ConfigProvider>
      <StoreProvider>
        <QueryClientProvider>
          <HttpClientProvider>
            <div className="h-screen w-screen bg-background text-foreground">
              <Outlet />
            </div>
          </HttpClientProvider>
        </QueryClientProvider>
      </StoreProvider>
    </ConfigProvider>
  );
}
