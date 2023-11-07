import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ErrorPage from "@components/ErrorPage";
import Layout from "@components/Layout";
import AuthRequired from "@components/AuthRequired";
import CreditReport from "@components/Reports/CreditReport";
import ProspectReport from "@components/Reports/ProspectReport";
import GroupReport from "@components/Reports/GroupReport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Login /> },
      {
        path: "dashboard",
        element: (
          <AuthRequired>
            <Dashboard />
          </AuthRequired>
        ),
        children: [
          { index: true, path: "credit-report", element: <CreditReport /> },
          { path: "prospect-report", element: <ProspectReport /> },
          { path: "group-report", element: <GroupReport /> },
        ],
      },
      { path: "contact", element: <>contact</> },
    ],
  },
]);

export default router;
