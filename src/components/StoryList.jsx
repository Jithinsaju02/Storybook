import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/StoryList.css";
import stories from "../data/stories"; // Import stories data

const StoryList = () => {
  const navigate = useNavigate();

  return (
    <div className="story-list-container">
              {/* Home Button */}
      <Link to="/" className="ann-home-btn">Home</Link>

      {/* Catchy Heading */}

      <h1 className="story-list-heading">Legends Unveiled: Choose Your Tale</h1>

      {/* Story Tiles */}
      <div className="story-tiles">
        {stories.map((story) => (
          <div
            key={story.id}
            className="story-tile"
            onClick={() => navigate(`/story/${story.id}`)}
          >
            <div
              className="story-image"
              style={{ backgroundImage: `url(${story.image})` }}
            ></div>
            <h2 className="story-title">{story.title}</h2>
            <div className="team-info-container">
            <p className="team-member">By {story.member.name}</p>
            <p className="team-id">{story.member.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryList;
