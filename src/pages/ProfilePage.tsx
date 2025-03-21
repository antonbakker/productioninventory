// src/pages/ProfilePage.tsx
import {
  Card,
  Flex,
  Heading,
  TextField,
  Button,
  Image,
  Text,
} from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";

export function ProfilePage() {
  const { user } = useAuthenticator();

  return (
    <Card>
      <Flex direction="column" gap="medium">
        <Heading level={2}>User Profile</Heading>

        <Flex direction="row" gap="large">
          <Card width="300px">
            <Flex direction="column" alignItems="center" gap="medium">
              <Image
                alt="Profile"
                src="/default-avatar.png"
                width="150px"
                height="150px"
              />
              <Text>{user?.attributes?.email}</Text>
            </Flex>
          </Card>

          <Card flex="1">
            <Flex direction="column" gap="medium">
              <TextField
                label="Name"
                value={user?.attributes?.name || ""}
                isReadOnly
              />
              <TextField
                label="Email"
                value={user?.attributes?.email || ""}
                isReadOnly
              />
              <TextField
                label="Phone Number"
                value={user?.attributes?.phone_number || ""}
                isReadOnly
              />
              <Button variation="primary">Update Profile</Button>
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </Card>
  );
}
