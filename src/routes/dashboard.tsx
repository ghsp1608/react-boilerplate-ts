import DasboardScreen1 from "../components/DashboardScreen1";
import DasboardScreen2 from "../components/DashboardScreen2";

export const routes: RouteType[] = [
  {
    path: "",
    component: <DasboardScreen1 />,
    exact: false,
    roles: [],
    private: true,
    showHeaderSidebar: true,
  },
  {
    path: "/screen2",
    component: <DasboardScreen2 />,
    exact: false,
    roles: [],
    private: true,
    showHeaderSidebar: true,
  },
];
