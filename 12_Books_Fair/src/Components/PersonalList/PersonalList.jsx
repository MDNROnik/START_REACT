import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from "../Books/Book";

import { getData } from "../../Utility/addToDB";

const PersonalList = () => {
  const { readList: initialReadList, wishList: initialWishList } = getData();
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const [allBooks, setAllBooks] = useState([]);
  const [loaded, setLoaded] = useState(true);

  const [showReadList, setShowReadList] = useState([]);
  const [showWishList, setShowWishList] = useState([]);

  const handleSort = (type) => {
    console.log(type);
    console.log(initialReadList);
    console.log(initialWishList);
    console.log(allBooks);
    console.log(showReadList);
    console.log(showWishList);
  };

  useEffect(() => {
    fetch("BooksData.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
    const temp1 = initialReadList.map((book) => book.id);
    const temp2 = initialWishList.map((book) => book.id);
    setReadList(temp1);
    setWishList(temp2);
    // console.log(initialReadList);
    // console.log(initialWishList);

    allBooks.forEach((book) => {
      if (readList.includes(book.bookId)) {
        // console.log("in read list", book.bookId);

        setShowReadList((prev) => [...prev, book]);
      }

      if (wishList.includes(book.bookId)) {
        setShowWishList((prev) => [...prev, book]);
      }
    });
  }, [loaded, initialReadList, initialWishList]);

  useEffect(() => {
    if (allBooks.length > 0) {
      setLoaded(false);
    } else {
      setLoaded(true);
    }
  }, [allBooks]);

  return (
    <div>
      <details className="dropdown ">
        <summary className="btn m-1">sort by : {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>My Read List</h2>
          <p>{showReadList.length}</p>
          {showReadList.map((b) => (
            <Book key={b.bookId} singleBook={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
          <p>{showWishList.length}</p>
          {showWishList.map((b) => (
            <Book key={b.bookId} singleBook={b}></Book>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PersonalList;
