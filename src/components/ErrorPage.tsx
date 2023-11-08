import { useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = (): React.ReactNode => {
  const error = useRouteError() as Error;

  useEffect(() => {
    console.log(error);
  }, []);

  return (
    <>
      <h1>Oops...</h1>
      {isRouteErrorResponse(error) ? (
        <p>Invalid Route</p>
      ) : (
        <p>Sorry, an unexpected error has occurred {error.message}.</p>
      )}
    </>
  );
};

export default ErrorPage;
