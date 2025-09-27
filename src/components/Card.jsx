export function Card({ cards, onCardClick, difficulty }) {
  function sliceCards(cards, difficulty) {
    if (difficulty === "easy") return cards.slice(0, 6);
    if (difficulty === "medium") return cards.slice(0, 9);
    return cards;
  }

  return (
    <div className={`card-container ${difficulty}`}>
      {sliceCards(cards, difficulty).map((card) => (
        <div className="card" key={card.id} onClick={() => onCardClick(card.id)}>
          <img className="card-image" src={card.img} alt="card" />
        </div>
      ))}
    </div>
  );
}
