import React,{useContext} from "react";
import { MyContext } from "../components/MyContext";
const ReviewList = () => {
  const {reviews } = useContext(MyContext);
  console.log(reviews)
  return (
    <div className='project-list'>
      {reviews.map((review) => {
        return (
          <>
            <h4>{review.name}</h4>

            <div className='assigned-to'>
              <p>
                <strong>Assigned to:</strong>
              </p>
              <ul>
                <li></li>
              </ul>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ReviewList;
