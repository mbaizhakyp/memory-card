// Holds main state: cards, score, bestScore
// Fetches data on mount
// Shuffles cards after each valid click

import "./styles/App.css";
import { useState, useEffect } from "react";
import shuffle from "./utils/shuffle";
import Card from "./components/Card.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";

// import Scoreboard from "./components/Scoreboard.jsx";

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);
  useEffect(() => {
    document.title = "Memory Card Game";
  }, []);
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Memory_card_game_icon.svg/1200px-Memory_card_game_icon.svg.png";
    }
  }, []);
  useEffect(() => {
    // Fetch API data into cards
    async function fetchCast() {
      try {
        const res = await fetch("https://api.tvmaze.com/shows/526/cast");
        const data = await res.json();
        const formattedCards = data
          .filter((c) => c.character.image) // filter out those with no images
          .map((member) => ({
            id: member.character.id,
            name: member.character.name,
            image: member.character.image.medium,
          }));
        // console.log(formattedCards);
        setCards(shuffle(formattedCards));
      } catch (err) {
        console.error("Failed to fetch cast:", err);
      }
    }
    fetchCast();
  }, []);
  const handleCardClick = (id) => {
    if (clickedIds.includes(id)) {
      setScore(0);
      setClickedIds([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClickedIds([...clickedIds, id]);
      if (newScore > bestScore) setBestScore(newScore);
    }
    shuffle();
  };

  return (
    <div className="app">
      <h1>Memory Card Game</h1>
      {/* <Scoreboard score={score} bestScore={bestScore} /> */}
      <div className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.name}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
      <MusicPlayer />
    </div>
  );
}

export default App;
