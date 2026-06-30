import { useState } from "react";
import "./Slides.css";

function Slides() {
  const slides = [
    {
      title: "Today's workout plan",
      text: "We're gonna do 3 fundamental exercises.",
    },
    {
      title: "First Exercise",
      text: "The first exercise is jumping jacks.",
    },
    {
      title: "Second Exercise",
      text: "The second exercise is push-ups.",
    },
    {
      title: "Third Exercise",
      text: "The third exercise is squats.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="slideshow">

      <div className="navigation">

        <button
          className="restart-button"
          data-testid="button-restart"
          disabled={currentSlide === 0}
          onClick={() => setCurrentSlide(0)}
        >
          Restart
        </button>

        <button
          className="prev-button"
          data-testid="button-prev"
          disabled={currentSlide === 0}
          onClick={() => setCurrentSlide(currentSlide - 1)}
        >
          Prev
        </button>

        <button
          className="next-button"
          data-testid="button-next"
          disabled={currentSlide === slides.length - 1}
          onClick={() => setCurrentSlide(currentSlide + 1)}
        >
          Next
        </button>

      </div>

      <div className="slide-card">

        <h1 data-testid="title">
          {slides[currentSlide].title}
        </h1>

        <p data-testid="text">
          {slides[currentSlide].text}
        </p>

      </div>

    </div>
  );
}

export default Slides;