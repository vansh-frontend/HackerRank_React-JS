import { useState } from "react";
import "./review.css";

const FeedbackSystemm = () => {
  const [feedback, setFeedback] = useState([
    { title: "Readability", upvotes: 0, downvotes: 0 },
    { title: "Performance", upvotes: 0, downvotes: 0 },
    { title: "Security", upvotes: 0, downvotes: 0 },
    { title: "Documentation", upvotes: 0, downvotes: 0 },
    { title: "Testing", upvotes: 0, downvotes: 0 },
  ]);

  const handleUpvote = (index) => {
    const updated = [...feedback];
    updated[index].upvotes++;
    setFeedback(updated);
  };

  const handleDownvote = (index) => {
    const updated = [...feedback];
    updated[index].downvotes++;
    setFeedback(updated);
  };

  return (
    <div className="container">
      <h3>Code Review FeedBack</h3>
      <p>To understand what we have to do in this & what is work of it checkout: <code>src/CodeReviewFeedBack/review.jsx</code></p>
      <div className="cards">
        {feedback.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.title}</h2>

            <div className="buttons">
              <button
                className="upvote"
                data-testid={`upvote-btn-${index}`}
                onClick={() => handleUpvote(index)}
              >
                👍 Upvote
              </button>

              <button
                className="downvote"
                data-testid={`downvote-btn-${index}`}
                onClick={() => handleDownvote(index)}
              >
                👎 Downvote
              </button>
            </div>

            <p data-testid={`upvote-count-${index}`}>
              Upvotes: <strong>{item.upvotes}</strong>
            </p>

            <p data-testid={`downvote-count-${index}`}>
              Downvotes: <strong>{item.downvotes}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystemm;