// src/pages/LocationCreate.tsx
import {
  Card,
  Flex,
  Heading,
  TextField,
  Button,
  Image,
  Input,
} from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { Schema } from "../../amplify/data/resource.ts";
import { generateClient } from "aws-amplify/data";
const client = generateClient<Schema>();
export function LocationCreate() {
  const { user } = useAuthenticator();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocationss] = useState<Schema["Location"]["type"]>(
    {} as Schema["Location"]["type"]
  );

  return (
    <Card>
      <Flex direction="column" gap="medium">
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

          <Flex direction="column" gap="medium">
            <Input
              placeholder="Locatienaam"
              value={location?.name || ""}
              isReadOnly
            />
            <TextField
              label="Tamigo Department ID"
              value={location?.tamigoDepartmentId || ""}
              isReadOnly
            />
            <TextField
              label="OMS4Business Location ID"
              value={location?.omsLocationId || ""}
              isReadOnly
            />
            <Button
              onClick={() => {
                client.models.Location.create(location);
              }}
              variation="primary"
            >
              create location
            </Button>
        </Flex>
      </Flex>
    </Card>
  );
}
