import { createBrowserRouter } from "react-router-dom";
import AuthRequired from "./components/AuthRequired";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import CreditReport from "./components/Reports/CreditReport";
import GroupReport from "./components/Reports/GroupReport";
import ProspectReport from "./components/Reports/ProspectReport";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

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
