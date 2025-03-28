/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInventory = /* GraphQL */ `
  query GetInventory($id: ID!) {
    getInventory(id: $id) {
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
        description
        factor
        id
        isDefault
        name
        owner
        updatedAt
        __typename
      }
      mutationTypeId
      owner
      product {
        createdAt
        density
        id
        name
        omsProductId
        owner
        updatedAt
        __typename
      }
      productId
      quantity
      shift {
        createdAt
        endTime
        id
        isDefault
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
        factor
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
export const getLanguage = /* GraphQL */ `
  query GetLanguage($id: ID!) {
    getLanguage(id: $id) {
      code
      createdAt
      id
      name
      owner
      translations {
        nextToken
        __typename
      }
      updatedAt
      userProfiles {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      createdAt
      id
      inventory {
        nextToken
        __typename
      }
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
      description
      factor
      id
      inventory {
        nextToken
        __typename
      }
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
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      createdAt
      density
      id
      inventory {
        nextToken
        __typename
      }
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
      inventory {
        nextToken
        __typename
      }
      isDefault
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
        description
        factor
        id
        isDefault
        name
        owner
        updatedAt
        __typename
      }
      mutationTypeId
      owner
      product {
        createdAt
        density
        id
        name
        omsProductId
        owner
        updatedAt
        __typename
      }
      productId
      quantity
      shift {
        createdAt
        endTime
        id
        isDefault
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
        factor
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
export const getTranslate = /* GraphQL */ `
  query GetTranslate($id: ID!) {
    getTranslate(id: $id) {
      createdAt
      id
      key
      language {
        code
        createdAt
        id
        name
        owner
        updatedAt
        __typename
      }
      languageId
      owner
      phrase
      translation
      updatedAt
      __typename
    }
  }
`;
export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
      createdAt
      factor
      id
      inventory {
        nextToken
        __typename
      }
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
      language {
        code
        createdAt
        id
        name
        owner
        updatedAt
        __typename
      }
      languageId
      lastName
      owner
      updatedAt
      __typename
    }
  }
`;
export const listInventories = /* GraphQL */ `
  query ListInventories(
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
export const listLanguages = /* GraphQL */ `
  query ListLanguages(
    $filter: ModelLanguageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLanguages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        code
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
        description
        factor
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
        isDefault
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
export const listTranslates = /* GraphQL */ `
  query ListTranslates(
    $filter: ModelTranslateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTranslates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        key
        languageId
        owner
        phrase
        translation
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
        factor
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
        languageId
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
