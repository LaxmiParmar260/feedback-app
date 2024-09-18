import React, { useEffect, useState } from "react";

const Form = ({ addFeedback, edit, updateFeedback }) => {
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // addFeedback(rating, review);

    setRating(1);
    setReview("");
    edit.isEdit
      ? updateFeedback({ id: edit.feedback.id, rating, review })
      : addFeedback(rating, review);
  };

  useEffect(() => {
    setRating(edit.feedback.rating);
    setReview(edit.feedback.review);
  }, [edit]);

  return (
    <div className="card p-3">
      <form onSubmit={(e) => handleSubmit(e)}>
        <select
          className="form-select"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea
          className="form-control my-3"
          placeholder="Enter Review Here"
          onChange={(e) => setReview(e.target.value)}
          value={review}
        ></textarea>
        <button className="btn btn-success w-100">Submit Review</button>
      </form>
    </div>
  );
};

export default Form;
