// src/pages/StockMutationPage.tsx
import {
  Card,
  Flex,
  SwitchField,
  SelectField,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Button,
} from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
const client = generateClient<Schema>({
  authMode: "userPool",
});

export function StockMutationCreate() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [shifts, setShifts] = useState<Array<Schema["Shift"]["type"]>>([]);
  const [products, setProducts] = useState<Array<Schema["Product"]["type"]>>(
    []
  );
  const [units, setUnits] = useState<Array<Schema["Unit"]["type"]>>([]);
  const [locations, setLocations] = useState<Array<Schema["Location"]["type"]>>(
    []
  );
  const [mutationTypes, setMutationTypes] = useState<
    Array<Schema["MutationType"]["type"]>
  >([]);
  interface HandleDateChange {
    (date: Date): void;
  }

  const handleDateChange: HandleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const loadLocations = async () => {
      const { data } = await client.models.Location.list({
        limit: 20,
      });
      setLocations(data);
    };
    const loadShifts = async () => {
      const { data } = await client.models.Shift.list({
        limit: 20,
      });
      setShifts(data);
    };
    const loadMutationTypes = async () => {
      const { data } = await client.models.MutationType.list({
        limit: 20,
      });
      setMutationTypes(data);
    };
    const loadProducts = async () => {
      const { data } = await client.models.Product.list({
        limit: 20,
      });
      setProducts(data);
    };
    const loadUnits = async () => {
      const { data } = await client.models.Unit.list({
        limit: 20,
      });
      setUnits(data);
    };
    loadShifts();
    loadProducts();
    loadUnits();
    loadLocations();
    loadMutationTypes();
  }, []);

  return (
    <Card>
      <Table highlightOnHover={true} variation="striped">
        <TableBody>
          <TableRow key="location">
            <TableCell>Locatie</TableCell>
            <TableCell>
              <SelectField label="location" labelHidden={true}>
                {locations.map((location) => (
                  <option id="location" key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </SelectField>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow key="date">
            <TableCell>Datum</TableCell>
            <TableCell>
              <input
                type="date"
                value={
                  selectedDate
                    ? selectedDate.toISOString().split("T")[0]
                    : new Date().toISOString().split("T")[0]
                }
                onChange={(e) => handleDateChange(new Date(e.target.value))}
              />
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow key="shift">
            <TableCell>Shift</TableCell>
            <TableCell>
              <SelectField label="shift" labelHidden={true}>
                {shifts.map((shift) => (
                  <option id="shift" key={shift.id} value={shift.id}>
                    {shift.name}
                  </option>
                ))}
              </SelectField>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow key="mutationType">
            <TableCell>Mutatietype</TableCell>
            <TableCell>
              <SelectField label="mutationType" labelHidden={true}>
                {mutationTypes.map((mutationType) => (
                  <option
                    id="mutationType"
                    key={mutationType.id}
                    value={mutationType.id}
                  >
                    {mutationType.name}
                  </option>
                ))}
              </SelectField>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
          {/* <TableRow key="isCorrection">
            <TableCell>Correctie?</TableCell>
            <TableCell>
              <SwitchField isDisabled={false} label="" labelPosition="start" />
            </TableCell>
            <TableCell></TableCell>
          </TableRow> */}
          <TableRow key="spacer"></TableRow>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>
                <input
                  id={`quantity-${product.id}`}
                  key={`quantity-${product.id}`}
                  type="number"
                />
              </TableCell>
              <TableCell>
                <SelectField
                  key={product.id}
                  label={product.id}
                  labelHidden={true}
                >
                  {units
                    .sort((a, b) =>
                      a.isDefault === b.isDefault ? 0 : a.isDefault ? -1 : 1
                    )
                    .map((unit) => (
                      <option
                        id={`unit-${product.id}`}
                        key={`unit-${product.id}`}
                        value={unit.id}
                      >
                        {unit.name}
                      </option>
                    ))}
                </SelectField>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variation="primary"
        colorTheme="error"
        onClick={async () => {
          const stockMutations = products.map((product) => {
            const quantityElement = document.getElementById(
              `quantity-${product.id}`
            ) as HTMLInputElement | null;
            const quantity = quantityElement
              ? parseFloat(quantityElement.value)
              : 0;
            const unitId = (
              document.getElementById(`unit-${product.id}`) as HTMLSelectElement
            ).value;
            const locationId = (
              document.getElementById("location") as HTMLSelectElement
            ).value;
            const mutationTypeId = (
              document.getElementById("mutationType") as HTMLSelectElement
            ).value;
            const shiftId = (
              document.getElementById("shift") as HTMLSelectElement
            ).value;

            return {
              locationId,
              date: selectedDate
                ? selectedDate.toISOString().split("T")[0]
                : new Date().toISOString().split("T")[0],
              shiftId,
              mutationTypeId,
              productId: product.id,
              quantity,
              unitId,
            };
          });

          try {
            await Promise.all(
              stockMutations.map((mutation) =>
                client.models.StockMutation.create(mutation)
              )
            );
            alert("Stock mutations created successfully!");
          } catch (error) {
            console.error("Error creating stock mutations:", error);
            alert("Failed to create stock mutations.");
          }
          navigate("/stock-mutation");
        }}
      >
        Create
      </Button>
    </Card>
  );
}

/*
    <Card>
      <StockMutationCreateForm onSuccess={() => navigate("/stock-mutation")} />
    </Card>



      <StockMutationCreateForm
        shifts={shifts}
        products={products}
        units={units}
        locations={locations}
        mutationTypes={mutationTypes}
        onSuccess={() => navigate("/stock-mutation")}
      />

*/
