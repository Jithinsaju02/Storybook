import React from "react";
import "../assets/Home.css";
import backgroundImage from "../assets/images/background.png"; // Ensure this is inside `src/assets/`
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* Floating background */}
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Content overlay */}
      <div className="overlay">
        {/* ✨ Blurred rectangle */}
        <div className="content-box">
          <h1>Welcome to Enchanted France: Five Legendary Folktales</h1>
          <p>
            Step into the world of French folklore, where history and myth
            intertwine to create timeless legends. This collection brings to
            life five of France’s most captivating tales, each rich with
            adventure, mystery, and enchantment.
          </p>
          <ul>
            <li>🐺 The Beast of Gévaudan – A monstrous creature terrorizes the countryside.</li>
            <li>🦊 The Tale of the Fox – The cunning fox outwits his foes.</li>
            <li>💎 The Treasures of the Templars – A legendary hidden fortune.</li>
            <li>🧚 The Fairy Mélusine – A woman of magic and destiny.</li>
            <li>⚔ The Four Sons of Aymon – A saga of knights and betrayal.</li>
          </ul>
          <Link to="/stories">
          <button className="btn">Stories</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
