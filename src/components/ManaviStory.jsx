import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/ManaviStory.css";
import storyPages from "../data/ManaviStory"; // Import story content

const ManaviStory = () => {
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
    <div className="m-story-container">
      {/* Home Button */}
      <Link to="/" className="ann-home-btn">Home</Link>
      <Link to="/stories" className="ann-back-btn">Back</Link>

      {/* Story Tile */}
      <div className="m-story-tile">
        {/* Image Inside Tile */}
{/* Image Inside Tile */}
{/* Image Inside Tile - Hide on Page 4 (Zero-based index 3) */}
{page !== 3 && page !==5 &&(
  <div className="m-story-image-container">
    <img src={storyPages[page].image} alt="Story" className="m-story-image" />
  </div>
)}



        {/* Story Text */}
        <p className="m-story-text">
  {page === 2  // Page 3 (zero-based index)
    ? storyPages[page].text.split("\n").map((line, index) => (
        <span key={index} className="m-dialogue-line">
          {line}
        </span>

      )):  page === 3 || page === 5// Page 3 (zero-based index)
        ? storyPages[page].text.split("\n\n").map((line, index) => (
            <span key={index} className="m-dialogue-line-para">
              {line}
            </span>
          ))
      
    : storyPages[page].text}
</p>



        {/* Page Number */}
        <p className="m-page-number">
          Page {page + 1} of {storyPages.length}
        </p>

        {/* Navigation Buttons */}
        <div className="m-navigation">
          <button onClick={prevPage} className="m-btn" disabled={page === 0}>
            Previous
          </button>
          <button onClick={nextPage} className="m-btn" disabled={page === storyPages.length - 1}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManaviStory;
