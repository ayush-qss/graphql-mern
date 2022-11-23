import React from "react";

const Book = ({ id, author, genres, name }) => {
  console.log(author);
  return (
    <div key={id}>
      <p>Book Name : {name}</p>
      <p>Genre : {genres}</p>
    </div>
  );
};

export default Book;
