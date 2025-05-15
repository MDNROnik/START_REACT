import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { getData } from "../../Utility/addToDB";

const PersonalList = () => {
  const { readList: initialReadList, wishList: initialWishList } = getData();
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");

  const handleSort = (type) => {
    console.log(type);
    console.log(initialReadList);
    console.log(initialWishList);
  };
  useEffect(() => {
    setReadList(initialReadList);
    setWishList(initialWishList);
  }, [initialReadList, initialWishList]);

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
          <p>{readList.length}</p>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
          <p>{wishList.length}</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PersonalList;
