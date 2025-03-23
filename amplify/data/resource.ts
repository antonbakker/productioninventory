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
    })
    .authorization((allow) => [allow.owner(), allow.groups(["admin"])]),
  Unit: a // error
    .model({
      name: a.string().required(),
      factor: a.float(),
      isDefault: a
        .boolean()
        .default(false)
        .validate((v) => {
          if (v) {
            return "Only one unit can be default";
          }
        }),
      mutations: a.hasMany("StockMutation", "unitId"),
      inventory: a.hasMany("Inventory", "unitId"),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.authenticated().to(["create", "read"]),
      allow.groups(["admin"]),
    ]),
  Product: a
    .model({
      name: a.string().required(),
      density: a.float().required(),
      mutations: a.hasMany("StockMutation", "productId"),
      inventory: a.hasMany("Inventory", "productId"),
      omsProductId: a.string().required(),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.authenticated().to(["create", "read"]),
      allow.groups(["admin"]),
    ]),
  Shift: a
    .model({
      name: a.string().required(),
      mutations: a.hasMany("StockMutation", "shiftId"),
      inventory: a.hasMany("Inventory", "shiftId"),
      startTime: a.time().required(),
      endTime: a.time().required(),
      tamigoShiftId: a.string().required(),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.authenticated().to(["create", "read"]),
      allow.groups(["admin"]),
    ]),
  MutationType: a
    .model({
      name: a.string().required(),
      description: a.string(),
      mutations: a.hasMany("StockMutation", "mutationTypeId"),
      inventory: a.hasMany("Inventory", "mutationTypeId"),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.authenticated().to(["create", "read"]),
      allow.groups(["admin"]),
    ]),
  Location: a
    .model({
      name: a.string().required(),
      mutations: a.hasMany("StockMutation", "locationId"),
      inventory: a.hasMany("Inventory", "locationId"),
      tamigoDepartmentId: a.string().required(),
      omsLocationId: a.string().required(),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.authenticated().to(["create", "read"]),
      allow.groups(["admin"]),
    ]),
  StockMutation: a
    .model({
      locationId: a.id().required(),
      shiftId: a.id().required(),
      mutationTypeId: a.id().required(),
      productId: a.id().required(),
      unitId: a.id().required(),
      location: a.belongsTo("Location", "locationId"),
      date: a.date().required(),
      shift: a.belongsTo("Shift", "shiftId"),
      mutationType: a.belongsTo("MutationType", "mutationTypeId"),
      product: a.belongsTo("Product", "productId"),
      quantity: a.float().required(),
      unit: a.belongsTo("Unit", "unitId"),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.authenticated().to(["create", "read"]),
      allow.groups(["admin"]),
    ]),
  Inventory: a
    .model({
      locationId: a.id().required(),
      shiftId: a.id().required(),
      mutationTypeId: a.id().required(),
      productId: a.id().required(),
      unitId: a.id().required(),
      location: a.belongsTo("Location", "locationId"),
      date: a.date().required(),
      shift: a.belongsTo("Shift", "shiftId"),
      mutationType: a.belongsTo("MutationType", "mutationTypeId"),
      product: a.belongsTo("Product", "productId"),
      quantity: a.float().required(),
      unit: a.belongsTo("Unit", "unitId"),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.authenticated().to(["create", "read"]),
      allow.groups(["admin"]),
    ]),
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
