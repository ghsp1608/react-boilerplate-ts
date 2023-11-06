// import ErrorBoundary from "./Components/ErrorBoundary";
// import { get } from "./store";

import useAuthStore from "../state/store";

// import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const DI = (Component: any) => {
  //   const dispatch = useContext(DispatchContext);
  return function (props: any) {
    // const dispatcher = useDispatch();
    const user = useAuthStore((s) => s.user);

    // if (user.role) {
    //   console.log(11);
    // }

    console.log(Component);
    if (Component().props.children === "ProspectReport") {
      return "can't access";
    }

    // const error = useRouteError();
    // if (isRouteErrorResponse(error)) {
    //   return <>404</>;
    // }

    return <Component {...props}>{props.children}</Component>;
  };
};

export default DI;
