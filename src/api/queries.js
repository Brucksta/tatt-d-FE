import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_ARTIST = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      styles
    }
  }
`;
