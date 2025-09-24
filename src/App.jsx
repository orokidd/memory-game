import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { shuffle } from "./util/shuffle";

export default function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/search?api_key=fAikYqHyFIWlkJ9cVYRlpMabsqx32PIJ&q=cats&limit=8&offset=0&rating=g&lang=en", { mode: "cors" })
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

  function handleClick(id) {
    setCards(prevCards => {
      const card = prevCards.find(card => card.id === id);

      if (card.clicked) {
        // Reset game if already clicked
        setScore(0);
        return shuffle(prevCards.map(card => ({ ...card, clicked: false })));
      } else {
        // Mark card as clicked
        const newCards = prevCards.map(card =>
          card.id === id ? { ...card, clicked: true } : card
        );
        // Increment score and update best score if needed
        setScore(prevScore => {
          const newScore = prevScore + 1;
          setBestScore(prevBest => Math.max(prevBest, newScore));
          return newScore;
        });
        return shuffle(newCards);
      }
    });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Card Memory Game</h1>
      <p>
        Score: {score} | Best: {bestScore}
      </p>
      <Card cards={cards} onCardClick={handleClick} />
    </div>
  );
}
