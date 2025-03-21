/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStockMutation = /* GraphQL */ `
  subscription OnCreateStockMutation(
    $filter: ModelSubscriptionStockMutationFilterInput
    $owner: String
  ) {
    onCreateStockMutation(filter: $filter, owner: $owner) {
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
export const onDeleteStockMutation = /* GraphQL */ `
  subscription OnDeleteStockMutation(
    $filter: ModelSubscriptionStockMutationFilterInput
    $owner: String
  ) {
    onDeleteStockMutation(filter: $filter, owner: $owner) {
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
export const onUpdateStockMutation = /* GraphQL */ `
  subscription OnUpdateStockMutation(
    $filter: ModelSubscriptionStockMutationFilterInput
    $owner: String
  ) {
    onUpdateStockMutation(filter: $filter, owner: $owner) {
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
