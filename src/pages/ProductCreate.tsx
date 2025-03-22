// ProductCreate.tsx
import ProductCreateForm from "../../ui-components/ProductCreateForm";
import { useNavigate } from "react-router-dom";
import { Card } from "@aws-amplify/ui-react";

export function ProductCreate() {
  const navigate = useNavigate();
  return (
    <Card>
      <ProductCreateForm onSuccess={() => navigate("/product")} />
    </Card>
  );
}
