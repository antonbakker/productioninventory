// src/pages/StockMutationPage.tsx
import {
  Collection,
  Table,
  Button,
  Heading,
  Flex,
  Card,
  SearchField,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Schema } from "../../amplify/data/resource.ts";
import { generateClient } from "aws-amplify/data";
const client = generateClient<Schema>();

export function StockMutationList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mutations, setMutations] = useState<
    Array<Schema["StockMutation"]["type"]>
  >([]);
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
    const loadMutations = async () => {
      const { data } = await client.models.StockMutation.list({
        limit: 20,
        filter: {
          date: {
            contains: searchQuery,
          },
        },
      });
      setMutations(data);
    };
    loadMutations();
    loadShifts();
    loadProducts();
    loadUnits();
    loadLocations();
    loadMutationTypes();
  }, [searchQuery]);

  return (
    <Card>
      <Flex direction="column" gap="medium">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading level={2}>Stock Mutations</Heading>
          <Link to={"/stock-mutation/create"}>Create New</Link>
        </Flex>

        <SearchField
          hasSearchButton={false}
          hasSearchIcon={true}
          label="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Table highlightOnHover={true} variation="striped">
          <TableHead>
            <TableRow>
              <TableCell>
                <h2>Locatie</h2>
              </TableCell>
              <TableCell>
                <h2>Datum</h2>
              </TableCell>
              <TableCell>
                <h2>Shift</h2>
              </TableCell>
              <TableCell>
                <h2>Type</h2>
              </TableCell>
              <TableCell>
                <h2>Product</h2>
              </TableCell>
              <TableCell>
                <h2>Hoeveelheid</h2>
              </TableCell>
              <TableCell>
                <h2>Eenheid</h2>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mutations.map((mutation) => (
              <TableRow key={mutation.id}>
                <TableCell>
                  {
                    locations?.find(
                      (location) => location.id === mutation.locationId
                    )?.name
                  }
                </TableCell>
                <TableCell>{mutation?.date}</TableCell>
                <TableCell>
                  {shifts?.find((shift) => shift.id === mutation.shiftId)?.name}
                </TableCell>
                <TableCell>
                  {
                    mutationTypes?.find(
                      (mutationType) =>
                        mutationType.id === mutation.mutationTypeId
                    )?.name
                  }
                </TableCell>
                <TableCell>
                  {
                    products?.find(
                      (product) => product.id === mutation.productId
                    )?.name
                  }
                </TableCell>
                <TableCell>{mutation?.quantity}</TableCell>
                <TableCell>
                  {units?.find((unit) => unit.id === mutation.unitId)?.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Flex>
    </Card>
  );
}
