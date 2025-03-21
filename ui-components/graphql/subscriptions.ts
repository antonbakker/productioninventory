/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onCreateLocation(filter: $filter, owner: $owner) {
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
export const onCreateMutationType = /* GraphQL */ `
  subscription OnCreateMutationType(
    $filter: ModelSubscriptionMutationTypeFilterInput
    $owner: String
  ) {
    onCreateMutationType(filter: $filter, owner: $owner) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onCreateProduct(filter: $filter, owner: $owner) {
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
export const onCreateShift = /* GraphQL */ `
  subscription OnCreateShift(
    $filter: ModelSubscriptionShiftFilterInput
    $owner: String
  ) {
    onCreateShift(filter: $filter, owner: $owner) {
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
export const onCreateStockMutation = /* GraphQL */ `
  subscription OnCreateStockMutation(
    $filter: ModelSubscriptionStockMutationFilterInput
    $owner: String
  ) {
    onCreateStockMutation(filter: $filter, owner: $owner) {
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
export const onCreateUnit = /* GraphQL */ `
  subscription OnCreateUnit(
    $filter: ModelSubscriptionUnitFilterInput
    $owner: String
  ) {
    onCreateUnit(filter: $filter, owner: $owner) {
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
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onCreateUserProfile(filter: $filter, owner: $owner) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onDeleteLocation(filter: $filter, owner: $owner) {
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
export const onDeleteMutationType = /* GraphQL */ `
  subscription OnDeleteMutationType(
    $filter: ModelSubscriptionMutationTypeFilterInput
    $owner: String
  ) {
    onDeleteMutationType(filter: $filter, owner: $owner) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onDeleteProduct(filter: $filter, owner: $owner) {
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
export const onDeleteShift = /* GraphQL */ `
  subscription OnDeleteShift(
    $filter: ModelSubscriptionShiftFilterInput
    $owner: String
  ) {
    onDeleteShift(filter: $filter, owner: $owner) {
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
export const onDeleteStockMutation = /* GraphQL */ `
  subscription OnDeleteStockMutation(
    $filter: ModelSubscriptionStockMutationFilterInput
    $owner: String
  ) {
    onDeleteStockMutation(filter: $filter, owner: $owner) {
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
export const onDeleteUnit = /* GraphQL */ `
  subscription OnDeleteUnit(
    $filter: ModelSubscriptionUnitFilterInput
    $owner: String
  ) {
    onDeleteUnit(filter: $filter, owner: $owner) {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onDeleteUserProfile(filter: $filter, owner: $owner) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onUpdateLocation(filter: $filter, owner: $owner) {
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
export const onUpdateMutationType = /* GraphQL */ `
  subscription OnUpdateMutationType(
    $filter: ModelSubscriptionMutationTypeFilterInput
    $owner: String
  ) {
    onUpdateMutationType(filter: $filter, owner: $owner) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onUpdateProduct(filter: $filter, owner: $owner) {
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
export const onUpdateShift = /* GraphQL */ `
  subscription OnUpdateShift(
    $filter: ModelSubscriptionShiftFilterInput
    $owner: String
  ) {
    onUpdateShift(filter: $filter, owner: $owner) {
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
export const onUpdateStockMutation = /* GraphQL */ `
  subscription OnUpdateStockMutation(
    $filter: ModelSubscriptionStockMutationFilterInput
    $owner: String
  ) {
    onUpdateStockMutation(filter: $filter, owner: $owner) {
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
export const onUpdateUnit = /* GraphQL */ `
  subscription OnUpdateUnit(
    $filter: ModelSubscriptionUnitFilterInput
    $owner: String
  ) {
    onUpdateUnit(filter: $filter, owner: $owner) {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onUpdateUserProfile(filter: $filter, owner: $owner) {
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
