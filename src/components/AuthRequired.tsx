import useAuthStore from "@/state/client/store";
import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const AuthRequired = ({ children }: Props): React.ReactNode => {
  const user = useAuthStore((s) => s.user);

  if (!user.name) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default AuthRequired;
