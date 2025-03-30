import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a 'content' field. Try
adding a new 'isDone' field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can 'create', 'read',
'update', and 'delete' any 'Todo' records.
=========================================================================*/
/*
land toevoegen aan producten en daarop filteren in mutaties
producten afhankelijk maken van de locatie 

n-op-1 relatie producten: verkoop kan verschillende gedaanten hebben, omdanks dat het om hetzelfde product gaat
model uitbreiden
PU:  product_nr(5000, 2866, 2072, 7001) => PU
Pocketveren: product_nr(6432, 5003, 7000) => pocketveren
Mix: product_nr(5001, 2081)
Plastic: product_nr(2076)
Latex: product_nr(2078, 7002, 5002)
Textiel vervuild: product_nr(7004, 2868)
Textiel schoon : product_nr(7005, 2080)
Restafval: product_nr: (2071, 7003, 7006)


Productdetails: foto + voorraad per locatie


*/

const schema = a
  .schema({
    // Role defines possible roles users can take on
    Role: a
      .model({
        name: a.string().required(),
        roleModels: a.hasMany("RoleModel", "roleId"),
      })
      .authorization((allow) => [allow.groups(["root", "admin"])]),
    // Model defines model
    RoleModel: a
      .model({
        roleId: a.id().required(),
        modelId: a.id().required(),
        role: a.belongsTo("Role", "roleId"),
        model: a.belongsTo("Model", "modelId"),
        permissions: a.hasMany("Permission", "permissionId"),
      })
      .authorization((allow) => [allow.groups(["root", "admin"])]),
    RoleModelPermission: a
      .model({
        roleModelId: a.id().required(),
        permissionId: a.id().required(),
        roleModel: a.belongsTo("RoleModel", "roleModelId"),
        permission: a.belongsTo("Permission", "permissionId"),
      })
      .authorization((allow) => [allow.groups(["root", "admin"])]),
    Model: a
      .model({
        name: a.string().required(),
        roleModels: a.hasMany("RoleModel", "modelId"),
      })
      .authorization((allow) => [allow.groups(["root", "admin"])]),
    Permission: a
      .model({
        name: a.string().required(),
        description: a.string(),
        roleModelPermissions: a.hasMany("RoleModelPermission", "permissionId"),
      })
      .authorization((allow) => [allow.groups(["root"])]),
    UserGroup: a
      .model({
        name: a.string().required(),
        users: a
          .string()
          .array()
          .authorization((allow) => [
            allow.groups(["root", "admin"]),
            allow.authenticated().to(["read"]),
            allow.owner(),
          ]),
      })
      .authorization((allow) => [
        allow.groups(["root", "admin"]),
        allow.owner(),
        allow.authenticated().to(["read"]),
      ]),
    ZoneInfo: a
      .model({
        name: a.string().required(),
        code: a.string().required(),
      })
      .authorization((allow) => [
        allow.owner(),
        allow.authenticated().to(["read"]),
        allow.groups(["admin"]),
      ]),
    Locale: a
      .model({
        name: a.string().required(),
        code: a.string().required(),
        translations: a.hasMany("Translate", "localeId"),
      })
      .authorization((allow) => [
        allow.owner(),
        allow.authenticated().to(["read"]),
        allow.groups(["admin"]),
      ]),
    Translate: a
      .model({
        localeId: a.id().required(),
        phrase: a.string().required(),
        translation: a.string().required(),
        locale: a.belongsTo("Locale", "localeId"),
      })
      .authorization((allow) => [
        allow.owner(),
        allow.authenticated().to(["read"]),
        allow.groups(["admin"]),
      ]),

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
    ProductCollection: a
      .model({
        productId: a.id().required(),
        name: a.string().required(),
        product: a.belongsTo("Product", "productId"),
        omsProductId: a.string().required(),
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
        productNr: a.string().required(),
        productCollection: a.hasMany("ProductCollection", "productId"),
        locations: a.hasMany("ProductLocation", "productId"),
        mutations: a.hasMany("StockMutation", "productId"),
        inventory: a.hasMany("Inventory", "productId"),
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
        isDefault: a
          .boolean()
          .default(false)
          .validate((v) => {
            if (v) {
              return "Only one unit can be default";
            }
          }),
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
        factor: a.float(),
        isDefault: a
          .boolean()
          .default(false)
          .validate((v) => {
            if (v) {
              return "Only one unit can be default";
            }
          }),
        mutations: a.hasMany("StockMutation", "mutationTypeId"),
        inventory: a.hasMany("Inventory", "mutationTypeId"),
      })
      .authorization((allow) => [
        allow.owner(),
        allow.authenticated().to(["create", "read"]),
        allow.groups(["admin"]),
      ]),
    ProductLocation: a
      .model({
        name: a.string().required(),
        locationId: a.id().required(),
        productId: a.id().required(),
        product: a.belongsTo("Product", "productId"),
        locations: a.belongsTo("Location", "locationId"),
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
        productLocations: a.hasMany("ProductLocation", "locationId"),
        products: a.hasMany("Product", "locationId"),
        tamigoDepartment: a.string().required(),
        tamigoDepartmentId: a.string().required(),
        omsLocation: a.string().required(),
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
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);

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
