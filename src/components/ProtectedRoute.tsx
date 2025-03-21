// src/components/ProtectedRoute.tsx
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({
  children,
  requiredGroups = [],
}: {
  children: React.ReactNode;
  requiredGroups?: string[];
}) {
  const { user } = useAuthenticator();
  const userGroups =
    user?.getSignInUserSession()?.getAccessToken().payload["cognito:groups"] ||
    [];

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (
    requiredGroups.length > 0 &&
    !requiredGroups.some((group) => userGroups.includes(group))
  ) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}
