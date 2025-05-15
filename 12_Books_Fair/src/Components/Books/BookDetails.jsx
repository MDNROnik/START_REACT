import { useLoaderData, useParams } from "react-router-dom";
import {addToReadList, addToWishList} from "../../Utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const newData = data[id - 1];
  const {bookId, bookName, image } = newData || {};
  // console.log(newData);
  const handleMarkAsRead = (id) => {
    addToReadList(id);
  };

  const handleWishList = (id) => {
    addToWishList(id);
  };
  return (
    <div className=" w-2/3 mx-auto">
      <img className="w-48" src={image} alt="" />
      <h5>{bookName}</h5>
      <button className="btn btn-accent m-2" onClick={()=>{handleMarkAsRead(bookId)}}>Mark as Read</button>
      <button className="btn btn-info m-2" onClick={()=>{handleWishList(bookId)}}>Add To WishList</button>
    </div>
  );
};

export default BookDetails;
