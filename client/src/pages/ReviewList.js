import React,{useContext} from "react";
import { MyContext } from "../components/MyContext";
const ReviewList = () => {
  const {reviews } = useContext(MyContext);
  console.log(reviews)
  
  
  return (
    <div className='card'>
    <h2 className='title'>{review.title}</h2>
    <p>
      <b>{review.comment}</b>
    </p>
    <p>
      <b>{`Rating: ${review.rating}/5`}</b>
    </p>

    <button onClick={handleUpdateClick}>Update this review!</button>
    <button onClick={handleDeleteClick}>Delete this review!</button>
    {errors.map((error) => {
      return (
        <span key={error} className='error'>
          {error}
        </span>
      );
    })}
  </div>
  );
};

export default ReviewList;
