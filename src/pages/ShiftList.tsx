// ShiftList.tsx
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

export function ShiftList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [shifts, setShifts] = useState<Array<Schema["Shift"]["type"]>>([]);

  useEffect(() => {
    const loadShifts = async () => {
      const { data } = await client.models.Shift.list({
        limit: 100,
        filter: {
          name: {
            contains: searchQuery,
          },
        },
      });
      setShifts(data);
    };

    loadShifts();
  }, [searchQuery]);

  return (
    <Card>
      <Flex direction="column" gap="medium">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading level={2}>Shifts</Heading>
          <Link to={"/shift/create"}>Create New</Link>
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
              <TableCell>Shift</TableCell>
              <TableCell>Starttijd</TableCell>
              <TableCell>Eindtijd</TableCell>
              <TableCell>Tamigo Shift ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shifts.map((shift) => (
              <TableRow key={shift.id}>
                <TableCell>{shift.name}</TableCell>
                <TableCell>{shift.startTime}</TableCell>
                <TableCell>{shift.endTime}</TableCell>
                <TableCell>{shift.tamigoShiftId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Flex>
    </Card>
  );
}
