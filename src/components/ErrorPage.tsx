import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = (): React.ReactNode => {
  const error = useRouteError();

  return (
    <>
      <h1>Oops...</h1>
      {isRouteErrorResponse(error) ? (
        <p>Invalid Route</p>
      ) : (
        <p>Sorry, an unexpected error has occurred.</p>
      )}
    </>
  );
};

export default ErrorPage;
