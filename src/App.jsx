import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { shuffle } from "./util/shuffle";
import { StartScreen } from "./components/StartScreen";
import { Options } from "./components/Options";
import { GameOver } from "./components/GameOver";
import './App.css';

export default function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [startScreen, setStartScreen] = useState(true);
  const [difficulty, setDifficulty] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=fAikYqHyFIWlkJ9cVYRlpMabsqx32PIJ&q=cats&limit=12&offset=0&rating=g&lang=en`, { mode: "cors" })
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
    if (!cards.length) return;
    if (difficulty === "easy" && score === 6) {
      setGameWon(true);
      setGameOver(true);
    }
    if (difficulty === "medium" && score === 9) {
      setGameWon(true);
      setGameOver(true);
    }
    if (difficulty === "hard" && score === 12) {
      setGameWon(true);
      setGameOver(true);
    }
  }, [score]);

  useEffect(() => {
    setBestScore(prevBest => Math.max(prevBest, score));
  }, [score]);

  function handleClick(id) {
      const selectedCard = cards.find(card => card.id === id);

      if (selectedCard.clicked) {
        // Reset game if already clicked
        setGameOver(true);
      } else {
        // Mark selected card as clicked
        const newCards = cards.map(card => card.id === id ? { ...card, clicked: true } : card);
        // Increment score and update best score if needed
        setScore(prevScore => prevScore + 1);
        setCards(shuffle(newCards));
      }
  }

  function resetCards() {
    setCards(prevCards => shuffle(prevCards.map(card => ({ ...card, clicked: false }))));
  }

  function resetScore() {
    setScore(0);
  }

  function restartGame() {
    resetScore();
    resetCards();
    setGameOver(false);
    setGameWon(false);
  }

  function newGame(selectedDifficulty) {
    setDifficulty(selectedDifficulty);
    setStartScreen(false);
    setScore(0);
    setBestScore(0);
    setGameOver(false);
  }

  return (
    startScreen ? ( 
    <StartScreen onStart={newGame} /> 
  ) : (
     <>
      <div className="app-wrapper">
        <h1 className="game-title">Cat Memory Game</h1>
        <p className="scoreboard">Score: {score} | Best: {bestScore}</p>
        <Card cards={cards} difficulty={difficulty} onCardClick={handleClick} />
        <Options resetGame={() => setStartScreen(true)} />
      </div>

      {gameOver && (
        <GameOver bestScore={bestScore} onRestart={restartGame} gameWon={gameWon} />
      )}
    </>
    )
  )
}