import React from "react";
import { useQuery, gql } from "@apollo/client";
import Book from "./Book";
import { GET_BOOKS } from "../queries/query";

const BookList = () => {
  const { error, loading, data } = useQuery(GET_BOOKS);

  if (loading) return <div>Loading...</div>;
  console.log({ error, loading, data });

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        Book List
      </h1>
      {data.books.map((book) => {
        return (
          <ul key={book.id}>
            <li>{book.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default BookList;
