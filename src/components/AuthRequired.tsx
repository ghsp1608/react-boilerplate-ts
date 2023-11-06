import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../state/store";

interface Props {
  children: React.ReactNode;
}

const AuthRequired = ({ children }: Props): React.ReactNode => {
  const user = useAuthStore((s) => s.user);

  console.log({ children });

  if (!user.name) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default AuthRequired;
