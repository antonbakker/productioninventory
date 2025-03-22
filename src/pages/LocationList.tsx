// src/pages/Locations.tsx
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
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Schema } from "../../amplify/data/resource.ts";
import { generateClient } from "aws-amplify/data";
const client = generateClient<Schema>();

export function LocationList() {
  const { user } = useAuthenticator();
  const [searchQuery, setSearchQuery] = useState("");
  const [locations, setLocations] = useState<Array<Schema["Location"]["type"]>>(
    []
  );

  useEffect(() => {
    const load = async () => {
      const { data } = await client.models.Location.list();
      setLocations(data);
    };
    load();
  }, []);

  return (
    <Card>
      <Flex direction="column" gap="medium">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading level={2}>Locations</Heading>
          <Link to={"/location/create"}>Create New</Link>
        </Flex>

        <SearchField
          label="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Table highlightOnHover={true} variation="striped">
          <TableHead>
            <TableRow>
              <TableCell>Naam</TableCell>
              <TableCell>Tamigo Department ID</TableCell>
              <TableCell>OMS4Business Location ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locations.map((location) => (
              <TableRow>
                <TableCell>{location.name}</TableCell>
                <TableCell>{location.tamigoDepartmentId}</TableCell>
                <TableCell>{location.omsLocationId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Flex>
    </Card>
  );
}
