// ShiftCreate.tsx
import { useNavigate } from "react-router-dom";
import { Card } from "@aws-amplify/ui-react";
import ShiftCreateForm from "../../ui-components/ShiftCreateForm";

export function ShiftCreate() {
  const navigate = useNavigate();
  return (
    <Card>
      <ShiftCreateForm onSuccess={() => navigate("/shift")} />
    </Card>
  );
}
