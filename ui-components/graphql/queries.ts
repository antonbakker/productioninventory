/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      createdAt
      id
      mutations {
        nextToken
        __typename
      }
      name
      omsLocationId
      owner
      tamigoDepartmentId
      updatedAt
      __typename
    }
  }
`;
export const getMutationType = /* GraphQL */ `
  query GetMutationType($id: ID!) {
    getMutationType(id: $id) {
      createdAt
      id
      mutations {
        nextToken
        __typename
      }
      name
      owner
      updatedAt
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      createdAt
      density
      id
      mutations {
        nextToken
        __typename
      }
      name
      omsProductId
      owner
      updatedAt
      __typename
    }
  }
`;
export const getShift = /* GraphQL */ `
  query GetShift($id: ID!) {
    getShift(id: $id) {
      createdAt
      endTime
      id
      mutations {
        nextToken
        __typename
      }
      name
      owner
      startTime
      tamigoShiftId
      updatedAt
      __typename
    }
  }
`;
export const getStockMutation = /* GraphQL */ `
  query GetStockMutation($id: ID!) {
    getStockMutation(id: $id) {
      corrections
      createdAt
      date
      id
      location {
        createdAt
        id
        name
        omsLocationId
        owner
        tamigoDepartmentId
        updatedAt
        __typename
      }
      locationId
      mutationType {
        createdAt
        id
        name
        owner
        updatedAt
        __typename
      }
      mutationTypeId
      owner
      productId
      products {
        createdAt
        density
        id
        name
        omsProductId
        owner
        updatedAt
        __typename
      }
      quantity
      shift {
        createdAt
        endTime
        id
        name
        owner
        startTime
        tamigoShiftId
        updatedAt
        __typename
      }
      shiftId
      unit {
        createdAt
        id
        isDefault
        name
        owner
        updatedAt
        __typename
      }
      unitId
      updatedAt
      __typename
    }
  }
`;
export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
      createdAt
      id
      isDefault
      mutations {
        nextToken
        __typename
      }
      name
      owner
      updatedAt
      __typename
    }
  }
`;
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      createdAt
      email
      firstName
      id
      lastName
      owner
      updatedAt
      __typename
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        name
        omsLocationId
        owner
        tamigoDepartmentId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listMutationTypes = /* GraphQL */ `
  query ListMutationTypes(
    $filter: ModelMutationTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMutationTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        name
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        density
        id
        name
        omsProductId
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listShifts = /* GraphQL */ `
  query ListShifts(
    $filter: ModelShiftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShifts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        endTime
        id
        name
        owner
        startTime
        tamigoShiftId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listStockMutations = /* GraphQL */ `
  query ListStockMutations(
    $filter: ModelStockMutationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStockMutations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        corrections
        createdAt
        date
        id
        locationId
        mutationTypeId
        owner
        productId
        quantity
        shiftId
        unitId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listUnits = /* GraphQL */ `
  query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        isDefault
        name
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        email
        firstName
        id
        lastName
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
