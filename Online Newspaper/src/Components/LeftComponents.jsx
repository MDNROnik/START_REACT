import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const LeftComponents = () => {
  const [catagory, setCatagory] = useState();

  useEffect(() => {
    fetch("../../public/Catagories.json")
      .then((res) => res.json())
      .then((data) => {
        setCatagory(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  if(!catagory) {
    return <span className="loading loading-ring loading-xl"></span>;
  }

  return (
    <div>
      <h2 className="font-bold">All Categories </h2>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {catagory.map((cat) => (
          <NavLink
            to={`/catagory/${cat.id}`}
            key={cat.id}
            className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftComponents;
