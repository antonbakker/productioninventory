/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInventory = /* GraphQL */ `
  subscription OnCreateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
    $owner: String
  ) {
    onCreateInventory(filter: $filter, owner: $owner) {
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
export const onCreateLanguage = /* GraphQL */ `
  subscription OnCreateLanguage(
    $filter: ModelSubscriptionLanguageFilterInput
    $owner: String
  ) {
    onCreateLanguage(filter: $filter, owner: $owner) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onCreateLocation(filter: $filter, owner: $owner) {
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
export const onCreateMutationType = /* GraphQL */ `
  subscription OnCreateMutationType(
    $filter: ModelSubscriptionMutationTypeFilterInput
    $owner: String
  ) {
    onCreateMutationType(filter: $filter, owner: $owner) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onCreateProduct(filter: $filter, owner: $owner) {
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
export const onCreateShift = /* GraphQL */ `
  subscription OnCreateShift(
    $filter: ModelSubscriptionShiftFilterInput
    $owner: String
  ) {
    onCreateShift(filter: $filter, owner: $owner) {
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
export const onCreateStockMutation = /* GraphQL */ `
  subscription OnCreateStockMutation(
    $filter: ModelSubscriptionStockMutationFilterInput
    $owner: String
  ) {
    onCreateStockMutation(filter: $filter, owner: $owner) {
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
export const onCreateTranslate = /* GraphQL */ `
  subscription OnCreateTranslate(
    $filter: ModelSubscriptionTranslateFilterInput
    $owner: String
  ) {
    onCreateTranslate(filter: $filter, owner: $owner) {
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
export const onCreateUnit = /* GraphQL */ `
  subscription OnCreateUnit(
    $filter: ModelSubscriptionUnitFilterInput
    $owner: String
  ) {
    onCreateUnit(filter: $filter, owner: $owner) {
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
export const onDeleteInventory = /* GraphQL */ `
  subscription OnDeleteInventory(
    $filter: ModelSubscriptionInventoryFilterInput
    $owner: String
  ) {
    onDeleteInventory(filter: $filter, owner: $owner) {
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
export const onDeleteLanguage = /* GraphQL */ `
  subscription OnDeleteLanguage(
    $filter: ModelSubscriptionLanguageFilterInput
    $owner: String
  ) {
    onDeleteLanguage(filter: $filter, owner: $owner) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onDeleteLocation(filter: $filter, owner: $owner) {
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
export const onDeleteMutationType = /* GraphQL */ `
  subscription OnDeleteMutationType(
    $filter: ModelSubscriptionMutationTypeFilterInput
    $owner: String
  ) {
    onDeleteMutationType(filter: $filter, owner: $owner) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onDeleteProduct(filter: $filter, owner: $owner) {
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
export const onDeleteShift = /* GraphQL */ `
  subscription OnDeleteShift(
    $filter: ModelSubscriptionShiftFilterInput
    $owner: String
  ) {
    onDeleteShift(filter: $filter, owner: $owner) {
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
export const onDeleteStockMutation = /* GraphQL */ `
  subscription OnDeleteStockMutation(
    $filter: ModelSubscriptionStockMutationFilterInput
    $owner: String
  ) {
    onDeleteStockMutation(filter: $filter, owner: $owner) {
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
export const onDeleteTranslate = /* GraphQL */ `
  subscription OnDeleteTranslate(
    $filter: ModelSubscriptionTranslateFilterInput
    $owner: String
  ) {
    onDeleteTranslate(filter: $filter, owner: $owner) {
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
export const onDeleteUnit = /* GraphQL */ `
  subscription OnDeleteUnit(
    $filter: ModelSubscriptionUnitFilterInput
    $owner: String
  ) {
    onDeleteUnit(filter: $filter, owner: $owner) {
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
export const onUpdateInventory = /* GraphQL */ `
  subscription OnUpdateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
    $owner: String
  ) {
    onUpdateInventory(filter: $filter, owner: $owner) {
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
export const onUpdateLanguage = /* GraphQL */ `
  subscription OnUpdateLanguage(
    $filter: ModelSubscriptionLanguageFilterInput
    $owner: String
  ) {
    onUpdateLanguage(filter: $filter, owner: $owner) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onUpdateLocation(filter: $filter, owner: $owner) {
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
export const onUpdateMutationType = /* GraphQL */ `
  subscription OnUpdateMutationType(
    $filter: ModelSubscriptionMutationTypeFilterInput
    $owner: String
  ) {
    onUpdateMutationType(filter: $filter, owner: $owner) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onUpdateProduct(filter: $filter, owner: $owner) {
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
export const onUpdateShift = /* GraphQL */ `
  subscription OnUpdateShift(
    $filter: ModelSubscriptionShiftFilterInput
    $owner: String
  ) {
    onUpdateShift(filter: $filter, owner: $owner) {
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
export const onUpdateStockMutation = /* GraphQL */ `
  subscription OnUpdateStockMutation(
    $filter: ModelSubscriptionStockMutationFilterInput
    $owner: String
  ) {
    onUpdateStockMutation(filter: $filter, owner: $owner) {
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
export const onUpdateTranslate = /* GraphQL */ `
  subscription OnUpdateTranslate(
    $filter: ModelSubscriptionTranslateFilterInput
    $owner: String
  ) {
    onUpdateTranslate(filter: $filter, owner: $owner) {
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
export const onUpdateUnit = /* GraphQL */ `
  subscription OnUpdateUnit(
    $filter: ModelSubscriptionUnitFilterInput
    $owner: String
  ) {
    onUpdateUnit(filter: $filter, owner: $owner) {
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
