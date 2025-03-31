import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/NoureenStory.css";
import storyPages from "../data/NoureenStory"; // Import story content

const NoureenStory = () => {
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
    <div className="ann-story-container">
      {/* Home Button */}
      <Link to="/" className="ann-home-btn">Home</Link>
      <Link to="/stories" className="ann-back-btn">Back</Link>

      {/* Story Tile */}
      <div className="ann-story-tile">
        {/* Image Inside Tile */}
{/* Image Inside Tile */}
<div className="ann-story-image-container">
  <img src={storyPages[page].image} alt="Story" className="ann-story-image" />
</div>


        {/* Story Text */}
        <p className="ann-story-text">{storyPages[page].text}</p>

        {/* Page Number */}
        <p className="ann-page-number">
          Page {page + 1} of {storyPages.length}
        </p>

        {/* Navigation Buttons */}
        <div className="ann-navigation">
          <button onClick={prevPage} className="ann-btn" disabled={page === 0}>
            Previous
          </button>
          <button onClick={nextPage} className="ann-btn" disabled={page === storyPages.length - 1}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoureenStory;
