import { useState, useEffect } from "react";

// Utility to shuffle array
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function CardGame() {
  const initialCards = [
    { id: 1, img: "🐱", clicked: false },
    { id: 2, img: "🐶", clicked: false },
    { id: 3, img: "🐰", clicked: false },
    { id: 4, img: "🐸", clicked: false },
    { id: 5, img: "🐵", clicked: false },
    { id: 6, img: "🐔", clicked: false },
    { id: 7, img: "🐧", clicked: false }
  ];

  const [cards, setCards] = useState(initialCards);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
  if (score === cards.length && cards.length > 0) {
    alert("You win!");
    setScore(0);
    setCards(shuffle(initialCards.map((card) => ({ ...card, clicked: false }))));
  }
}, [score, cards]);

  function handleClick(id) {
    
    setCards((prevCards) => {
      const card = prevCards.find((card) => card.id === id);

      if (card.clicked) {
        // Reset game if already clicked
        setScore(0);
        return shuffle(initialCards.map((card) => ({ ...card, clicked: false })));
      } else {
        // Mark card as clicked
        const newCards = prevCards.map((c) =>
          c.id === id ? { ...c, clicked: true } : c
        );
        setScore((prevScore) => {
          const newScore = prevScore + 1;
          setBestScore((prevBest) => Math.max(prevBest, newScore));
          return newScore;
        });
        return shuffle(newCards);
      }
    })
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Card Memory Game</h1>
      <p>Score: {score} | Best: {bestScore}</p>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleClick(card.id)}
            style={{
              width: "80px",
              height: "120px",
              border: "2px solid black",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              cursor: "pointer",
              background: card.clicked ? "#a3a3a3ff" : "white",
            }}>
            {card.img}
          </div>
        ))}
      </div>
    </div>
  );
}
