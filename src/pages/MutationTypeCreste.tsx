// MutationTypeCreate.tsx
import MutationTypeCreateForm from "../../ui-components/MutationTypeCreateForm";
import { useNavigate } from "react-router-dom";
import { Card } from "@aws-amplify/ui-react";

export function MutationTypeCreate() {
  const navigate = useNavigate();
  return (
    <Card>
      <MutationTypeCreateForm onSuccess={() => navigate("/mutation-type")} />
    </Card>
  );
}
