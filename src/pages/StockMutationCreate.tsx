// src/pages/StockMutationPage.tsx
import { StockMutationCreateForm } from "../../ui-components";
import { useNavigate } from "react-router-dom";
import { Card } from "@aws-amplify/ui-react";

export function StockMutationCreate() {
  const navigate = useNavigate();
  return (
    <Card>
      <StockMutationCreateForm
        onSuccess={() => navigate("/stock-mutations")}
        onCancel={() => navigate("/stock-mutations")}
      />
    </Card>
  );
}
