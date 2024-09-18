import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({ feedbacks, removeFeedback, editFeedback}) => {
  return (
    <ul className="list-group my-3">
      {feedbacks.map((feedback) => (
        <ListItem
         feedback = {feedback}
         key = {feedback.id}
         removeFeedback = {removeFeedback}
         editFeedback = {editFeedback}
          
        />
      ))}
    </ul>
  );
};

export default ListGroup;
