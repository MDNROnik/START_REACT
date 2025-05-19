import { useEffect, useState } from "react";
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

  return (
    <div>
      <h2 className="font-bold">All Categories </h2>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {catagory?.map((cat) => (
          <button
            key={cat.id}
            className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftComponents;
