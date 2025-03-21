/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $condition: ModelLocationConditionInput
    $input: CreateLocationInput!
  ) {
    createLocation(condition: $condition, input: $input) {
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
      userProfile {
        createdAt
        email
        firstName
        id
        lastName
        owner
        updatedAt
        __typename
      }
      userProfileId
      __typename
    }
  }
`;
export const createMutationType = /* GraphQL */ `
  mutation CreateMutationType(
    $condition: ModelMutationTypeConditionInput
    $input: CreateMutationTypeInput!
  ) {
    createMutationType(condition: $condition, input: $input) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $condition: ModelProductConditionInput
    $input: CreateProductInput!
  ) {
    createProduct(condition: $condition, input: $input) {
      createdAt
      density
      id
      mutations {
        nextToken
        __typename
      }
      name
      omsproductId
      owner
      updatedAt
      __typename
    }
  }
`;
export const createShift = /* GraphQL */ `
  mutation CreateShift(
    $condition: ModelShiftConditionInput
    $input: CreateShiftInput!
  ) {
    createShift(condition: $condition, input: $input) {
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
export const createStockMutation = /* GraphQL */ `
  mutation CreateStockMutation(
    $condition: ModelStockMutationConditionInput
    $input: CreateStockMutationInput!
  ) {
    createStockMutation(condition: $condition, input: $input) {
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
        userProfileId
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
        omsproductId
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
        default
        id
        name
        owner
        updatedAt
        __typename
      }
      unitId
      updatedAt
      userProfile {
        createdAt
        email
        firstName
        id
        lastName
        owner
        updatedAt
        __typename
      }
      userProfileId
      __typename
    }
  }
`;
export const createUnit = /* GraphQL */ `
  mutation CreateUnit(
    $condition: ModelUnitConditionInput
    $input: CreateUnitInput!
  ) {
    createUnit(condition: $condition, input: $input) {
      createdAt
      default
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
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $condition: ModelUserProfileConditionInput
    $input: CreateUserProfileInput!
  ) {
    createUserProfile(condition: $condition, input: $input) {
      createdAt
      email
      firstName
      id
      lastName
      locations {
        nextToken
        __typename
      }
      mutations {
        nextToken
        __typename
      }
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $condition: ModelLocationConditionInput
    $input: DeleteLocationInput!
  ) {
    deleteLocation(condition: $condition, input: $input) {
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
      userProfile {
        createdAt
        email
        firstName
        id
        lastName
        owner
        updatedAt
        __typename
      }
      userProfileId
      __typename
    }
  }
`;
export const deleteMutationType = /* GraphQL */ `
  mutation DeleteMutationType(
    $condition: ModelMutationTypeConditionInput
    $input: DeleteMutationTypeInput!
  ) {
    deleteMutationType(condition: $condition, input: $input) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $condition: ModelProductConditionInput
    $input: DeleteProductInput!
  ) {
    deleteProduct(condition: $condition, input: $input) {
      createdAt
      density
      id
      mutations {
        nextToken
        __typename
      }
      name
      omsproductId
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteShift = /* GraphQL */ `
  mutation DeleteShift(
    $condition: ModelShiftConditionInput
    $input: DeleteShiftInput!
  ) {
    deleteShift(condition: $condition, input: $input) {
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
export const deleteStockMutation = /* GraphQL */ `
  mutation DeleteStockMutation(
    $condition: ModelStockMutationConditionInput
    $input: DeleteStockMutationInput!
  ) {
    deleteStockMutation(condition: $condition, input: $input) {
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
        userProfileId
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
        omsproductId
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
        default
        id
        name
        owner
        updatedAt
        __typename
      }
      unitId
      updatedAt
      userProfile {
        createdAt
        email
        firstName
        id
        lastName
        owner
        updatedAt
        __typename
      }
      userProfileId
      __typename
    }
  }
`;
export const deleteUnit = /* GraphQL */ `
  mutation DeleteUnit(
    $condition: ModelUnitConditionInput
    $input: DeleteUnitInput!
  ) {
    deleteUnit(condition: $condition, input: $input) {
      createdAt
      default
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $condition: ModelUserProfileConditionInput
    $input: DeleteUserProfileInput!
  ) {
    deleteUserProfile(condition: $condition, input: $input) {
      createdAt
      email
      firstName
      id
      lastName
      locations {
        nextToken
        __typename
      }
      mutations {
        nextToken
        __typename
      }
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $condition: ModelLocationConditionInput
    $input: UpdateLocationInput!
  ) {
    updateLocation(condition: $condition, input: $input) {
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
      userProfile {
        createdAt
        email
        firstName
        id
        lastName
        owner
        updatedAt
        __typename
      }
      userProfileId
      __typename
    }
  }
`;
export const updateMutationType = /* GraphQL */ `
  mutation UpdateMutationType(
    $condition: ModelMutationTypeConditionInput
    $input: UpdateMutationTypeInput!
  ) {
    updateMutationType(condition: $condition, input: $input) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $condition: ModelProductConditionInput
    $input: UpdateProductInput!
  ) {
    updateProduct(condition: $condition, input: $input) {
      createdAt
      density
      id
      mutations {
        nextToken
        __typename
      }
      name
      omsproductId
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateShift = /* GraphQL */ `
  mutation UpdateShift(
    $condition: ModelShiftConditionInput
    $input: UpdateShiftInput!
  ) {
    updateShift(condition: $condition, input: $input) {
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
export const updateStockMutation = /* GraphQL */ `
  mutation UpdateStockMutation(
    $condition: ModelStockMutationConditionInput
    $input: UpdateStockMutationInput!
  ) {
    updateStockMutation(condition: $condition, input: $input) {
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
        userProfileId
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
        omsproductId
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
        default
        id
        name
        owner
        updatedAt
        __typename
      }
      unitId
      updatedAt
      userProfile {
        createdAt
        email
        firstName
        id
        lastName
        owner
        updatedAt
        __typename
      }
      userProfileId
      __typename
    }
  }
`;
export const updateUnit = /* GraphQL */ `
  mutation UpdateUnit(
    $condition: ModelUnitConditionInput
    $input: UpdateUnitInput!
  ) {
    updateUnit(condition: $condition, input: $input) {
      createdAt
      default
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $condition: ModelUserProfileConditionInput
    $input: UpdateUserProfileInput!
  ) {
    updateUserProfile(condition: $condition, input: $input) {
      createdAt
      email
      firstName
      id
      lastName
      locations {
        nextToken
        __typename
      }
      mutations {
        nextToken
        __typename
      }
      owner
      updatedAt
      __typename
    }
  }
`;
