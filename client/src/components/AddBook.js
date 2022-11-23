import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import axios from "axios";
import { GET_AUTHOR } from "../queries/query";

const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [genres, setGenres] = useState("");
  const [authorId, setAuthorId] = useState("");

  const ADD_BOOK = gql`
    mutation AddBook($bookName: String!, $genres: String!, $authorId: String!) {
      addBook(name: $bookName, genres: $genres, authorId: $authorId) {
        name
        id
        genres
        author {
          id
          name
          age
        }
      }
    }
  `;

  const [add, { error: error1, loading: loading1, data: data1 }] = useMutation(
    ADD_BOOK,
    {
      variables: {
        bookName,
        genres,
        authorId,
      },
    }
  );

  const AddBookHandler = (e) => {
    e.preventDefault();
    add();
  };
  const { loading, error, data } = useQuery(GET_AUTHOR);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => setBookName(e.target.value)}
          value={bookName}
          placeholder="Book Name"
        />
        <input
          onChange={(e) => setGenres(e.target.value)}
          value={genres}
          type="text"
          placeholder="Genres"
        />
        <div>
          {data.authors.map((author) => (
            <div
              style={{
                cursor: "pointer",
                border: "2px solid black",
                display: "inline",
                margin: "10px",
              }}
              onClick={() => setAuthorId(author.id)}
              key={author.id}
            >
              {author.name}
            </div>
          ))}
        </div>
        <button onClick={AddBookHandler} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
