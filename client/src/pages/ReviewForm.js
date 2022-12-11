import React, { useState, useContext } from "react";
import { MyContext } from "../components/MyContext";

const ReviewForm = ({ user }) => {
  const { movieToReview, setReviews, reviews } = useContext(MyContext);
  const defaultValues ={
    comment: "",
    rating: "",
    user_id: user.id || 0,
    movie_id: movieToReview.id || 0,
  }
  console.log(user);
  const [form, setForm] = useState(defaultValues);

  const [errors, setErrors] = useState([]);
  console.log("from Review form:", user);
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setForm({ ...form, [name]: value });
  }
  // controls the login form

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([])
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => {
      if (res.ok) {
        res.json().then((review) => {
          setReviews([...reviews, review]);
        });
      } else {
        res.json().then((err) => setErrors(err.error));
      }
      setForm(defaultValues);
    });
  }
  console.log(movieToReview);
  console.log(reviews);
  return (
    <div>
      <h3>Movie Reviews</h3>
      <h1>{movieToReview.title}</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Add new review:</span>
          <textarea
            onChange={handleChange}
            value={form.comment}
            name='comment'
          ></textarea>
          {/* Stretch Goal make stars */}
          <span>Add rating:</span>
          <textarea
            style={{ minHeight: "10px", maxWidth: "10em" }}
            onChange={handleChange}
            name='rating'
            value={form.rating}
          ></textarea>
        </label>
        <button className='btn'>Add Review</button>
      {errors.map((error) => {
        return (
          <span key={error} className='error'>
            {error}
          </span>
        );
      })}
      </form>
    </div>
  );
};

export default ReviewForm;
