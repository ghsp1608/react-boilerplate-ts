import { Route } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

export function generateRoutes(routes: RouteType[]): JSX.Element[] {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={route.component}
      errorElement={<ErrorPage />}
    />
  ));
}
