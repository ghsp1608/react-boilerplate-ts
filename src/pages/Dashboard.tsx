import BasicTabs from "@/components/BasicTabs";
import useAuthStore from "@/state/client/store";
import { Outlet } from "react-router-dom";

const Dashboard = (): React.ReactNode => {
  const user = useAuthStore((s) => s.user);

  return (
    <>
      {user.name} - {user.role}
      <BasicTabs />
      <Outlet />
    </>
  );
};

export default Dashboard;
