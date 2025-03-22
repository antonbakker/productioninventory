// src/pages/LocationCreate.tsx

import LocationCreateForm from "../../ui-components/LocationCreateForm";
import { useNavigate } from "react-router-dom";
import { Card } from "@aws-amplify/ui-react";

export function LocationCreate() {
  const navigate = useNavigate();
  return (
    <Card>
      <LocationCreateForm onSuccess={() => navigate("/location")} />
    </Card>
  );
}

/*
import {
  Card,
  Flex,
  Heading,
  Label,
  Button,
  Image,
  Input,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { useState } from "react";
import { Schema } from "../../amplify/data/resource.ts";
import { generateClient } from "aws-amplify/data";
const client = generateClient<Schema>();
export function LocationCreate() {
  const { user } = useAuthenticator();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [name, setName] = useState("");
  const [tamigoDepartmentId, setTamigoDepartmentId] = useState("");
  const [omsLocationId, setOmsLocationId] = useState("");
  const [location, setLocations] = useState<Schema["Location"]["type"] | null>(
    null
  );

  
  return (
    <Card>
      <Flex direction="column">
        <Heading level={2}>Location</Heading>
        <Flex direction="row" gap="large">
          <Card width="300px">
            <Flex direction="column" alignItems="center" gap="medium">
              <Image
                alt="Profile"
                src="/default-avatar.png"
                width="150px"
                height="150px"
              />
            </Flex>
          </Card>
          <Flex direction="column">
            <Flex direction="column">
              <Label htmlFor="locationName">Locatie</Label>
              <Input id="name" onChange={(e) => setName(e.target.value)} />
            </Flex>

            <Flex direction="column">
              <Label htmlFor="tamigoDepartment">Tamigo Department ID</Label>
              <Input
                id="tamigoDepartmentId"
                onChange={(e) => setTamigoDepartmentId(e.target.value)}
              />
            </Flex>

            <Flex direction="column">
              <Label htmlFor="omsLocation">OMS Location ID</Label>
              <Input
                id="omsLocationId"
                onChange={(e) => setOmsLocationId(e.target.value)}
              />
            </Flex>
            <Button
              onClick={() => {
                client.models.Location.create({
                  name: name || "",
                  tamigoDepartmentId: tamigoDepartmentId || "",
                  omsLocationId: omsLocationId || "",
                }).then((newLocation) => {
                  setLocations(newLocation);
                  navigate("/location");
                });
              }}
            >
              Create Location
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
*/
