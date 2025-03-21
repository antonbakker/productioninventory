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
import { StockMutationCreateForm } from "../../ui-components";
import { Link } from "react-router-dom";
import { Schema } from "../../amplify/data/resource.ts";
import { generateClient } from "aws-amplify/data";
const client = generateClient<Schema>();

export function StockMutationIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mutations, setMutations] = useState<
    Array<Schema["StockMutation"]["type"]>
  >([]);

  useEffect(() => {
    const load = async () => {
      const { data } = await client.models.StockMutation.list();
      setMutations(data);
    };
    load();
  }, []);
  return (
    <Card>
      <Flex direction="column" gap="medium">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading level={2}>Stock Mutations</Heading>
          <Link to={"/stock-mutations/create"}>Create New</Link>
        </Flex>

        <SearchField
          label="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Table highlightOnHover={true} variation="striped">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mutations.map((mutation) => (
              <TableRow>
                <TableCell>{mutation.date}</TableCell>
                <TableCell>{/*  TODO*/}</TableCell>
                <TableCell>{mutation.location}</TableCell>
                <TableCell>{mutation.quantity}</TableCell>
                <TableCell>{/*  TODO*/}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Flex>
    </Card>
  );
}
