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
import { fetchUserAttributes } from "aws-amplify/auth";
// import { useAuthenticator } from "@aws-amplify/ui-react";

export async function Profile() {
  const userAttributes = await fetchUserAttributes();
  // const { user } = useAuthenticator();

  return (
    <Card>
      <Flex direction="column" gap="medium">
        <Heading level={2}>User Profile</Heading>

        <Flex direction="row" gap="large">
          <Card width="300px">
            <Flex direction="column" alignItems="center" gap="medium">
              <Image
                alt="Profile"
                src={userAttributes?.profilePicture || ""}
                width="150px"
                height="150px"
              />
              <Text>{userAttributes?.email}</Text>
            </Flex>
          </Card>

          <Card flex="1">
            <Flex direction="column" gap="medium">
              <TextField
                label="Email"
                value={userAttributes?.email || ""}
                isReadOnly
              />
              <TextField
                label="Nickname"
                value={userAttributes?.nickname || ""}
                isReadOnly
              />
              <TextField
                label="Gender"
                value={userAttributes?.gender || ""}
                isReadOnly
              />
              <TextField
                label="First name"
                value={userAttributes?.given_name || ""}
                isReadOnly
              />
              <TextField
                label="Middle name"
                value={userAttributes?.middle_name || ""}
                isReadOnly
              />
              <TextField
                label="Sir name"
                value={userAttributes?.family_name || ""}
                isReadOnly
              />
              <TextField
                label="Phone number"
                value={userAttributes?.phone_number || ""}
                isReadOnly
              />
              <TextField
                label="Locale"
                value={userAttributes?.locale || ""}
                isReadOnly
              />
              <TextField
                label="Timezone"
                value={userAttributes?.zoneinfo || ""}
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
