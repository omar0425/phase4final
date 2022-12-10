import React,{useState} from 'react'

const ReviewForm = () => {
  const [form, setForm] = useState({
    comment: '',
    rating: ''
  })
  function handleChange(e) {
    let name = e.target.name
    let value = e.target.value
    setForm({ ...form, [name]: value })
  }
// controls the login form
function handleChange(e) {
  let name = e.target.name
  let value = e.target.value
  setForm({ ...form, [name]: value })
}

function handleSubmit(e) {
  e.preventDefault();
  fetch("/review", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  }).then((res) => {
    if (res.ok) {
      res.json().then((user) => {
        onLogin(user)
      });

    } else {
      res.json().then((err) => setErrors(err.error));
    }
    setForm({
      username: '',
      password: ''
    })
  });
}
  
  return (
    
      <div>
      <h4>Movie Reviews</h4>

      <form  onSubmit={handleSubmit}>
        <label>
          <span>Add new review:</span>
          <textarea 
            onChange={handleChange}
            value={form.comment}
            name="comment"
            
          ></textarea>
          {/* Stretch Goal make stars */}
          <span>Add rating:</span>
          <textarea 
          style={{minHeight:"10px", maxWidth:"10em"}}
          onChange={handleChange}
          name = "rating"
            value={form.rating}
          ></textarea>
        </label>
        <button className="btn">Add Review</button>
      </form>
    </div>
  )
  
  
}

export default ReviewForm;