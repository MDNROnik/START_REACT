import { Suspense, useEffect, useState } from "react";
import Book from "./Book";
const Books = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    fetch("BooksData.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, [loaded]);
  useEffect(() => {
    if (allBooks.length > 0) {
      setLoaded(false);
    } else {
      setLoaded(true);
    }
  }, [allBooks]);
  return (
    <div>
      <h1 className=" text-3xl text-center p-6">Books</h1>
      <Suspense fallback={<span>loading......</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allBooks?.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
