import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/Story.css";
import stories from "../data/stories"; // Import stories data

const MultiPageStory = () => {
  const { id } = useParams(); // Get story ID from URL
  const navigate = useNavigate();
  const story = stories.find((s) => s.id === id);

  const [page, setPage] = useState(0); // Track current page

  if (!story) {
    return <h2>Story not found.</h2>;
  }

  // Story pages data (replace with real content)
  const storyPages = [
    { image: "/images/ann1.jpg", text: "This is page 1 of the story." },
    { image: "/images/ann2.jpg", text: "Page 2 of the story." },
    { image: "/images/ann3.jpg", text: "Page 3 of the story." },
    { image: "/images/ann4.jpg", text: "Page 4 of the story." },
    { image: "/images/ann5.jpg", text: "Page 5 of the story." },
  ];

  return (
    <div className="story-container">
      {/* Fixed Background Image */}
      <div
        className="story-background"
        style={{ backgroundImage: `url('/images/background.png')` }}
      ></div>

      {/* Content Box */}
      <div className="story-content-box">
        <h1>{story.title}</h1>
        <img src={storyPages[page].image} alt={`Page ${page + 1}`} className="story-page-image" />
        <p>{storyPages[page].text}</p>

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
            className="nav-btn"
          >
            Previous
          </button>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === storyPages.length - 1}
            className="nav-btn"
          >
            Next
          </button>
        </div>

        <button className="back-btn" onClick={() => navigate("/stories")}>
          Back to Stories
        </button>
      </div>
    </div>
  );
};

export default MultiPageStory;
