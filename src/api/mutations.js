import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $artist: Boolean!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, artist: $artist) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation singleUpload($file: Upload!, $tattooType: String!) {
    singleUpload(file: $file, tattooType: $tattooType) {
      filename
      mimetype
      encoding
    }
  }
`;
