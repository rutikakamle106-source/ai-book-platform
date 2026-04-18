import { useEffect, useState } from "react";
import { getBook } from "../api";

function BookDetail({ id }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBook(id).then(res => setBook(res.data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>
    </div>
  );
}

export default BookDetail;