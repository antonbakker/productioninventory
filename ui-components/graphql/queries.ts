/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStockMutation = /* GraphQL */ `
  query GetStockMutation($id: ID!) {
    getStockMutation(id: $id) {
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
export const listStockMutations = /* GraphQL */ `
  query ListStockMutations(
    $filter: ModelStockMutationFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listStockMutations(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
