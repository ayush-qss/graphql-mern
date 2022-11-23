import { useQuery, gql } from "@apollo/client";

export const GET_BOOKS = gql`
  {
    books {
      id
      name
      genres
      author {
        name
      }
    }
  }
`;

export const GET_AUTHOR = gql`
  {
    authors {
      name
      id
    }
  }
`;
