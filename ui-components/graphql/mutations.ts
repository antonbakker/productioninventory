/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStockMutation = /* GraphQL */ `
  mutation CreateStockMutation(
    $condition: ModelStockMutationConditionInput
    $input: CreateStockMutationInput!
  ) {
    createStockMutation(condition: $condition, input: $input) {
      corrections
      createdAt
      date
      deletedAt
      id
      location
      owner
      shift
      type
      updatedAt
      userId
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
      deletedAt
      id
      location
      owner
      shift
      type
      updatedAt
      userId
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
      deletedAt
      id
      location
      owner
      shift
      type
      updatedAt
      userId
      __typename
    }
  }
`;
