import type { PostConfirmationTriggerHandler } from "aws-lambda";
import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { getAmplifyDataClientConfig } from "@aws-amplify/backend/function/runtime";
import { env } from "$amplify/env/post-confirmation";

const { resourceConfig, libraryOptions } =
  await getAmplifyDataClientConfig(env);

Amplify.configure(resourceConfig, libraryOptions);

const client = generateClient<Schema>();

export const handler: PostConfirmationTriggerHandler = async (event) => {
  await client.models.UserProfile.create({
    email: event.request.userAttributes.email,
    profileOwner: `${event.request.userAttributes.sub}::${event.userName}`,
    groups: Array.isArray(event.request.userAttributes.groups)
      ? event.request.userAttributes.groups
      : [""],
    country: event.request.userAttributes.country,
    locale: event.request.userAttributes.locale, // Reference to locale id
    timeZone: event.request.userAttributes.timeZone,
    firstName: event.request.userAttributes.firstName, // Provide appropriate firstName
    middleName: event.request.userAttributes.middleName, // Provide appropriate middleName
    lastName: event.request.userAttributes.lastName, // Provide appropriate lastName
  });

  return event;
};
