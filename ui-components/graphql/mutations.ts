/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInventory = /* GraphQL */ `
  mutation CreateInventory(
    $condition: ModelInventoryConditionInput
    $input: CreateInventoryInput!
  ) {
    createInventory(condition: $condition, input: $input) {
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
export const createLanguage = /* GraphQL */ `
  mutation CreateLanguage(
    $condition: ModelLanguageConditionInput
    $input: CreateLanguageInput!
  ) {
    createLanguage(condition: $condition, input: $input) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $condition: ModelLocationConditionInput
    $input: CreateLocationInput!
  ) {
    createLocation(condition: $condition, input: $input) {
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
export const createMutationType = /* GraphQL */ `
  mutation CreateMutationType(
    $condition: ModelMutationTypeConditionInput
    $input: CreateMutationTypeInput!
  ) {
    createMutationType(condition: $condition, input: $input) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $condition: ModelProductConditionInput
    $input: CreateProductInput!
  ) {
    createProduct(condition: $condition, input: $input) {
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
export const createShift = /* GraphQL */ `
  mutation CreateShift(
    $condition: ModelShiftConditionInput
    $input: CreateShiftInput!
  ) {
    createShift(condition: $condition, input: $input) {
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
export const createStockMutation = /* GraphQL */ `
  mutation CreateStockMutation(
    $condition: ModelStockMutationConditionInput
    $input: CreateStockMutationInput!
  ) {
    createStockMutation(condition: $condition, input: $input) {
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
export const createTranslate = /* GraphQL */ `
  mutation CreateTranslate(
    $condition: ModelTranslateConditionInput
    $input: CreateTranslateInput!
  ) {
    createTranslate(condition: $condition, input: $input) {
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
export const createUnit = /* GraphQL */ `
  mutation CreateUnit(
    $condition: ModelUnitConditionInput
    $input: CreateUnitInput!
  ) {
    createUnit(condition: $condition, input: $input) {
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
export const deleteInventory = /* GraphQL */ `
  mutation DeleteInventory(
    $condition: ModelInventoryConditionInput
    $input: DeleteInventoryInput!
  ) {
    deleteInventory(condition: $condition, input: $input) {
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
export const deleteLanguage = /* GraphQL */ `
  mutation DeleteLanguage(
    $condition: ModelLanguageConditionInput
    $input: DeleteLanguageInput!
  ) {
    deleteLanguage(condition: $condition, input: $input) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $condition: ModelLocationConditionInput
    $input: DeleteLocationInput!
  ) {
    deleteLocation(condition: $condition, input: $input) {
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
export const deleteMutationType = /* GraphQL */ `
  mutation DeleteMutationType(
    $condition: ModelMutationTypeConditionInput
    $input: DeleteMutationTypeInput!
  ) {
    deleteMutationType(condition: $condition, input: $input) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $condition: ModelProductConditionInput
    $input: DeleteProductInput!
  ) {
    deleteProduct(condition: $condition, input: $input) {
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
export const deleteShift = /* GraphQL */ `
  mutation DeleteShift(
    $condition: ModelShiftConditionInput
    $input: DeleteShiftInput!
  ) {
    deleteShift(condition: $condition, input: $input) {
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
export const deleteStockMutation = /* GraphQL */ `
  mutation DeleteStockMutation(
    $condition: ModelStockMutationConditionInput
    $input: DeleteStockMutationInput!
  ) {
    deleteStockMutation(condition: $condition, input: $input) {
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
export const deleteTranslate = /* GraphQL */ `
  mutation DeleteTranslate(
    $condition: ModelTranslateConditionInput
    $input: DeleteTranslateInput!
  ) {
    deleteTranslate(condition: $condition, input: $input) {
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
export const deleteUnit = /* GraphQL */ `
  mutation DeleteUnit(
    $condition: ModelUnitConditionInput
    $input: DeleteUnitInput!
  ) {
    deleteUnit(condition: $condition, input: $input) {
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
export const updateInventory = /* GraphQL */ `
  mutation UpdateInventory(
    $condition: ModelInventoryConditionInput
    $input: UpdateInventoryInput!
  ) {
    updateInventory(condition: $condition, input: $input) {
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
export const updateLanguage = /* GraphQL */ `
  mutation UpdateLanguage(
    $condition: ModelLanguageConditionInput
    $input: UpdateLanguageInput!
  ) {
    updateLanguage(condition: $condition, input: $input) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $condition: ModelLocationConditionInput
    $input: UpdateLocationInput!
  ) {
    updateLocation(condition: $condition, input: $input) {
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
export const updateMutationType = /* GraphQL */ `
  mutation UpdateMutationType(
    $condition: ModelMutationTypeConditionInput
    $input: UpdateMutationTypeInput!
  ) {
    updateMutationType(condition: $condition, input: $input) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $condition: ModelProductConditionInput
    $input: UpdateProductInput!
  ) {
    updateProduct(condition: $condition, input: $input) {
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
export const updateShift = /* GraphQL */ `
  mutation UpdateShift(
    $condition: ModelShiftConditionInput
    $input: UpdateShiftInput!
  ) {
    updateShift(condition: $condition, input: $input) {
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
export const updateStockMutation = /* GraphQL */ `
  mutation UpdateStockMutation(
    $condition: ModelStockMutationConditionInput
    $input: UpdateStockMutationInput!
  ) {
    updateStockMutation(condition: $condition, input: $input) {
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
export const updateTranslate = /* GraphQL */ `
  mutation UpdateTranslate(
    $condition: ModelTranslateConditionInput
    $input: UpdateTranslateInput!
  ) {
    updateTranslate(condition: $condition, input: $input) {
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
export const updateUnit = /* GraphQL */ `
  mutation UpdateUnit(
    $condition: ModelUnitConditionInput
    $input: UpdateUnitInput!
  ) {
    updateUnit(condition: $condition, input: $input) {
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
