// src/pages/StockMutationPage.tsx
import {
  Collection,
  Table,
  Button,
  Heading,
  Flex,
  Card,
  SearchField,
} from "@aws-amplify/ui-react";
import { useState } from "react";
import { StockMutationCreateForm } from "../../ui-components";

export function StockMutationPage() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Card>
      <Flex direction="column" gap="medium">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading level={2}>Stock Mutations</Heading>
          <Button onClick={() => setShowCreateForm(true)}>Create New</Button>
        </Flex>

        <SearchField
          label="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Table highlightOnHover={true} variation="striped">
          <Table.Header>
            <Table.Row>
              <Table.Cell>Date</Table.Cell>
              <Table.Cell>Product</Table.Cell>
              <Table.Cell>Location</Table.Cell>
              <Table.Cell>Quantity</Table.Cell>
              <Table.Cell>Type</Table.Cell>
              <Table.Cell>Actions</Table.Cell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{/* Data rows will go here */}</Table.Body>
        </Table>

        {showCreateForm && (
          <StockMutationCreateForm
            onSuccess={() => setShowCreateForm(false)}
            onCancel={() => setShowCreateForm(false)}
          />
        )}
      </Flex>
    </Card>
  );
}
