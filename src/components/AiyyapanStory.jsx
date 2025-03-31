import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/AiyyapanStory.css";
import storyPages from "../data/AiyyapanStory"; // Import story content

const AiyyapanStory = () => {
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
    <div className="a-story-container">
      {/* Home Button */}
      <Link to="/" className="ann-home-btn">Home</Link>
      <Link to="/stories" className="ann-back-btn">Back</Link>

      {/* Story Tile */}
      <div className="a-story-tile">
        {/* Image Inside Tile */}
{/* Image Inside Tile */}
{/* Image Inside Tile - Hide on Page 4 (Zero-based index 3) */}
{page !== 3 && (
  <div className="a-story-image-container">
    <img src={storyPages[page].image} alt="Story" className="a-story-image" />
  </div>
)}



        {/* Story Text */}
        <p className="a-story-text">
  {page === 2 || page === 4  // Page 3 (zero-based index)
    ? storyPages[page].text.split("\n").map((line, index) => (
        <span key={index} className="a-dialogue-line">
          {line}
        </span>

      )):  page === 3 || page === 5 //page 3 (zero-based index)
        ? storyPages[page].text.split("\n\n").map((line, index) => (
            <span key={index} className="a-dialogue-line-para">
              {line}
            </span>
          ))
      
    : storyPages[page].text}
</p>



        {/* Page Number */}
        <p className="a-page-number">
          Page {page + 1} of {storyPages.length}
        </p>

        {/* Navigation Buttons */}
        <div className="a-navigation">
          <button onClick={prevPage} className="a-btn" disabled={page === 0}>
            Previous
          </button>
          <button onClick={nextPage} className="a-btn" disabled={page === storyPages.length - 1}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiyyapanStory;
