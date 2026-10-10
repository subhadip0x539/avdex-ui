import { Router } from "@/router";

import { RouterProvider as ReactRouterProvider } from "react-router-dom";

export interface RouterProviderProps {
  router?: Router;
}

export function RouterProvider(props: RouterProviderProps) {
  const { router } = props;

  return <ReactRouterProvider router={router ?? new Router()} />;
}
