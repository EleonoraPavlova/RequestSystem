import { RouteObject } from "react-router-dom";

import ManagerPage from "@/pages/manager-page";
import UserPage from "@/pages/user-page";
import { PATH } from "@/shared/enums";
import LogsPage from "@/pages/logs-page";

export const router: RouteObject[] = [
  {
    path: PATH.USER,
    element: <UserPage />,
  },
  {
    path: PATH.MANAGER,
    element: <ManagerPage />,
  },
  {
    path: PATH.LOGS,
    element: <LogsPage />,
  },
  {
    path: PATH.NOT_FOUND_ROUTE,
    element: <UserPage />,
  },
  {
    path: PATH.ROOT,
    element: <UserPage />,
  },
];
