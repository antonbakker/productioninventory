import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a 'content' field. Try
adding a new 'isDone' field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can 'create', 'read',
'update', and 'delete' any 'Todo' records.
=========================================================================*/
const schema = a.schema({
  UserProfile: a
    .model({
      email: a.string().required(),
      firstName: a.string().required(),
      lastName: a.string().required(),
      locations: a.hasMany("Location", "userProfileId"),
      mutations: a.hasMany("StockMutation", "userProfileId"),
    })
    .authorization((allow) => [allow.owner()]),
  Unit: a
    .model({
      name: a.string().required(),
      default: a.boolean().default(false),
      mutations: a.hasMany("StockMutation", "unitId"),
    })
    .authorization((allow) => [allow.owner()]),
  Product: a
    .model({
      name: a.string().required(),
      density: a.float().required(),
      mutations: a.hasMany("StockMutation", "productId"),
      omsproductId: a.id(),
    })
    .authorization((allow) => [allow.owner()]),
  Shift: a
    .model({
      name: a.string().required(),
      mutations: a.hasMany("StockMutation", "shiftId"),
      startTime: a.string().required(),
      endTime: a.string().required(),
      tamigoShiftId: a.string().required(),
    })
    .authorization((allow) => [allow.owner()]),
  MutationType: a
    .model({
      name: a.string().required(),
      mutations: a.hasMany("StockMutation", "mutationTypeId"),
    })
    .authorization((allow) => [allow.owner()]),
  Location: a
    .model({
      name: a.string().required(),
      mutations: a.hasMany("StockMutation", "locationId"),
      userProfileId: a.id(),
      userProfile: a.belongsTo("UserProfile", "userProfileId"),
      tamigoDepartmentId: a.id().required(),
      omsLocationId: a.id().required(),
    })
    .authorization((allow) => [allow.owner()]),
  StockMutation: a
    .model({
      locationId: a.id(),
      shiftId: a.id(),
      mutationTypeId: a.id(),
      productId: a.id(),
      unitId: a.id(),
      userProfileId: a.id(),
      location: a.belongsTo("Location", "locationId"),
      date: a.date().required(),
      shift: a.belongsTo("Shift", "shiftId"),
      mutationType: a.belongsTo("MutationType", "mutationTypeId"),
      corrections: a.boolean().default(false),
      products: a.belongsTo("Product", "productId"),
      quantity: a.float().required(),
      unit: a.belongsTo("Unit", "unitId"),
      userProfile: a.belongsTo("UserProfile", "userProfileId"),
    })
    .authorization((allow) => [allow.owner()]), // .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool", // defaultAuthorizationMode: 'apiKey',
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
'use client'
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
