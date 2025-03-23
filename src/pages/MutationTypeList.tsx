// ProductList.tsx
import {
  Card,
  Flex,
  Heading,
  SearchField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
const client = generateClient<Schema>({
  authMode: "userPool",
});

export function MutationTypeList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mutationTypes, setMutationTypes] = useState<
    Array<Schema["MutationType"]["type"]>
  >([]);

  useEffect(() => {
    const loadMutationTypes = async () => {
      const { data } = await client.models.MutationType.list({
        limit: 100,
        filter: {
          name: {
            contains: searchQuery,
          },
        },
      });
      setMutationTypes(data);
    };

    loadMutationTypes();
  }, [searchQuery]);

  return (
    <Card>
      <Flex direction="column" gap="medium">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading level={2}>Mutatietypes</Heading>
          <Link to={"/mutation-type/create"}>Create New</Link>
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
              <TableCell>Mutatietype</TableCell>
              <TableCell>Omschrijving</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mutationTypes.map((mutationType) => (
              <TableRow key={mutationType.id}>
                <TableCell>{mutationType.name}</TableCell>
                <TableCell>{mutationType.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Flex>
    </Card>
  );
}
