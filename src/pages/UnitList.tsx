// UnitList.tsx
import {
  Card,
  Flex,
  Heading,
  SearchField,
  SwitchField,
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

export function UnitList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [units, setUnits] = useState<Array<Schema["Unit"]["type"]>>([]);

  useEffect(() => {
    const loadUnits = async () => {
      const { data } = await client.models.Unit.list({
        limit: 100,
        filter: {
          name: {
            contains: searchQuery,
          },
        },
      });
      setUnits(data);
    };
    loadUnits();
  }, [searchQuery]);

  return (
    <Card>
      <Flex direction="column" gap="medium">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading level={2}>Eenheden</Heading>
          <Link to={"/unit/create"}>Create Unit</Link>
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
              <TableCell>Eenheid</TableCell>
              <TableCell>Factor</TableCell>
              <TableCell>Standaard</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {units.map((unit) => (
              <TableRow key={unit.id}>
                <TableCell>{unit.name}</TableCell>
                <TableCell>{unit.factor}</TableCell>
                <TableCell>
                  <SwitchField
                    isChecked={unit.isDefault ?? false}
                    isDisabled={true}
                    label=""
                    labelPosition="start"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Flex>
    </Card>
  );
}
