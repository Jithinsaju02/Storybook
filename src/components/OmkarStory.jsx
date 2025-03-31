import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/OmkarStory.css";
import storyPages from "../data/OmkarStory"; // Import story content

const OmkarStory = () => {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page < storyPages.length - 1) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="o-story-container">
      {/* Home Button */}
      <Link to="/" className="ann-home-btn">Home</Link>
      <Link to="/stories" className="ann-back-btn">Back</Link>

      {/* Story Tile */}
      <div className="o-story-tile">
        {/* Image Inside Tile */}
{/* Image Inside Tile */}
{page !== 5 && (
  <div className="o-story-image-container">
    <img src={storyPages[page].image} alt="Story" className="o-story-image" />
  </div>
)}


        {/* Story Text */}
        <p className="o-story-text">
  {page === 5 // Page 3 (zero-based index)
    ? storyPages[page].text.split("\n").map((line, index) => (
        <span key={index} className="o-dialogue-line-para">
          {line}
        </span>

      )): storyPages[page].text}
</p>
        {/* Page Number */}
        <p className="o-page-number">
          Page {page + 1} of {storyPages.length}
        </p>

        {/* Navigation Buttons */}
        <div className="o-navigation">
          <button onClick={prevPage} className="o-btn" disabled={page === 0}>
            Previous
          </button>
          <button onClick={nextPage} className="o-btn" disabled={page === storyPages.length - 1}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OmkarStory;
