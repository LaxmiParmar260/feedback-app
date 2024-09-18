import React from "react";

const Average = ({feedbacks}) => {
    const avg = feedbacks.reduce((p, c)=> p + c.rating/feedbacks.length, 0)
  return (
    <div className="my-3 d-flex align-items-center justify-content-between">
      <p>Total Reviews : {feedbacks.length} </p>
      <p>Average Rating : {avg.toFixed(2)}</p>
    </div>
  );
};

export default Average;
