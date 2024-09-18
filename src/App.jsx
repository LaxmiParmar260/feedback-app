import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Average from "./components/Average";

const App = () => {
  const [feedbacks, setFeedbacks] = useState([
    // {id:1, review: "good", rating: 4},
    // {id:2, review: "good", rating: 4},
    // {id:3, review: "good", rating: 4}
  ]);

  //for storing the previouse data in edit
  const [edit, setEdit] = useState({
    feedback: {},
    isEdit: false,
  });

  //addFeedback
  const addFeedback = (rating, review) => {
    setFeedbacks([
      { id: crypto.randomUUID(), rating: rating, review: review },
      ...feedbacks,
    ]);
  };

  //removeFeedback
  const removeFeedback = (id) => {
    setFeedbacks(feedbacks.filter((item) => item.id !== id));
  };

  //editFeedback
  const editFeedback = (feedback) => {
    setEdit({
      feedback: feedback,
      isEdit: true,
    });
  };

  //updateFeedback
  const updateFeedback = (updatedData) => {
    setFeedbacks(
      feedbacks.map((feedback) =>
         feedback.id === updatedData.id
        ? updatedData
        : feedback
)
    );
  };

  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Form
          addFeedback={addFeedback}
          edit={edit}
          updateFeedback={updateFeedback}
        />
        <Average feedbacks={feedbacks} />
        <ListGroup
          feedbacks={feedbacks}
          removeFeedback={removeFeedback}
          editFeedback={editFeedback}
        />
      </div>
    </>
  );
};

export default App;
