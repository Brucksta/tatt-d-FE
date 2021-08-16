import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      artist
      tattoo
      flash
      email
      bio
      social
      style
      profilePicture
    }
  }
`;


export const FIND_USER = gql`
  query search($search: String!) {
    findUsers(search: $search) {
      _id
      firstName
      lastName
      email
      bio
      social
      style
      profilePicture
    }
  }
`;
