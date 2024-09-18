import React from "react";

const ListItem = ({ feedback, removeFeedback, editFeedback }) => {
  return (
    <li className="list-group-item">
      <h1>Rating : {feedback.rating}</h1>
      <p>Review : {feedback.review} </p>
      <span className="float-end">
        <button className="btn btn-sm btn-warning mx-1" onClick={()=>editFeedback(feedback)} >Edit</button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => removeFeedback(feedback.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
