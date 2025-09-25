import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { shuffle } from "./util/shuffle";
import { StartScreen } from "./components/StartScreen";
import './App.css';

export default function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [startScreen, setStartScreen] = useState(true);

  useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/search?api_key=fAikYqHyFIWlkJ9cVYRlpMabsqx32PIJ&q=cats&limit=9&offset=0&rating=g&lang=en", { mode: "cors" })
      .then(res => res.json())
      .then(data =>
        setCards(
          data.data.map(item => ({
            id: item.id,
            img: item.images.fixed_height.url,
            clicked: false
          }))
        )
      );
  }, []);

  useEffect(() => {
    if (!cards.length) return; // guard if cards not loaded yet
    if (score === cards.length) {
      alert("You win!");
      setScore(0);
      setCards(shuffle(cards.map(card => ({ ...card, clicked: false }))));
    }
  }, [score, cards]);

  useEffect(() => {
    setBestScore(prevBest => Math.max(prevBest, score));
  }, [score]);

  function handleClick(id) {
      const selectedCard = cards.find(card => card.id === id);

      if (selectedCard.clicked) {
        // Reset game if already clicked
        resetScore();
        resetCards();
      } else {
        // Mark selected card as clicked
        const newCards = cards.map(card =>
          card.id === id ? { ...card, clicked: true } : card
        );
        // Increment score and update best score if needed
        setScore(prevScore => prevScore + 1)
        setCards(shuffle(newCards));
      }
  }

  function resetCards() {
    setCards(prevCards => shuffle(prevCards.map(card => ({ ...card, clicked: false }))));
  }

  function resetScore() {
    setScore(0);
  }

  return (
    startScreen ? ( 
    <StartScreen onStart={() => setStartScreen(false)} /> 
  ) : (
    <div className="app-wrapper">
      <h1 className="game-title">Card Memory Game</h1>
      <p className="scoreboard">Score: {score} | Best: {bestScore}</p>
      <Card cards={cards} onCardClick={handleClick} />
    </div> 
    )
  );
}