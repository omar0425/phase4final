import React, { useContext, useState } from "react";
import { MyContext } from "./MyContext";
import ReviewCardUpdate from "./ReviewCardUpdate";
function ReviewCard({ review }) {
  const { setReviews, reviews, user } = useContext(MyContext);
  const [updateToggle, setUpdateToggle] = useState(false);
  const [errors, setErrors] = useState([]);
  console.log(review)
  console.log(user)
  function handleDeleteClick(e) {
    e.preventDefault();
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }).then((res) => {
      if (res.ok) {
        res.json().then((review) => {
          const newReviews = reviews.filter((rev) => rev.id !== review.id);
          setReviews(newReviews);
        });
      } else {
        return res.json().then((err) => setErrors(err.error));
      }
    });
  }
  console.log(review.user.id === user.id)
  function onUpdateToggle() {
    setUpdateToggle(!updateToggle);
  }
  return (
    <div className='card'>
      {updateToggle ? (
        <ReviewCardUpdate review={review} changeToggle={onUpdateToggle} setErrors={setErrors} />
      ) : (
        <></>
      )}
      <h2 className='title'>{review.title}</h2>
      <p>{`(${review.movie.title})`}</p>
      <p>
        <b>{review.comment}</b>
      </p>
      <p>{`Reviewed By: ${review.user.username}`}</p>
      <p>
        <b>{`Rating: ${review.rating}/5`}</b>
      </p>
      <button 
      disabled ={review.user.id === user.id ? false : true}
      onClick={onUpdateToggle}
      >Update this review!</button>
      {/* {errors.map((error) => {
        return (
          <span key={error} className='error'>
            {error}
          </span>
        );
      })} */}
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
}
export default ReviewCard;
