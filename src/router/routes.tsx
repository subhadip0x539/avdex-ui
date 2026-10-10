import type { RouteObject } from "react-router-dom";
import { AppLayout } from "@/app/layout";
import { AppError } from "@/app/error";
import { PortalLayout } from "@/app/portal/layout";

export const routes: RouteObject[] = [
  {
    path: "app",
    element: <AppLayout />,
    errorElement: <AppError />,
    children: [
      {
        path: "portal",
        element: <PortalLayout />,
        children: [
          {
            path: "artifacts",
            children: [
              {
                path: "",
                async lazy() {
                  const { ArtifactsPage } =
                    await import("@/app/portal/artifacts/page");
                  return { Component: ArtifactsPage };
                },
              },
              {
                path: ":id",
                async lazy() {
                  const { ArtifactsIdPage } =
                    await import("@/app/portal/artifacts/id/page");
                  return { Component: ArtifactsIdPage };
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
