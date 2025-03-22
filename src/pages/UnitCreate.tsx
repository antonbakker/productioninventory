// UnitCreate.tsx
import UnitCreateForm from "../../ui-components/UnitCreateForm";
import { useNavigate } from "react-router-dom";
import { Card } from "@aws-amplify/ui-react";

export function UnitCreate() {
  const navigate = useNavigate();
  return (
    <Card>
      <UnitCreateForm onSuccess={() => navigate("/unit")} />
    </Card>
  );
}
