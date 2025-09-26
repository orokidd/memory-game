export function Card({ cards, onCardClick, difficulty }) {
  return (
    <div className={`card-container ${difficulty}`}>
      {cards.map((card) => (
        <div className="card" key={card.id} onClick={() => onCardClick(card.id)}>
          <img className="card-image" src={card.img} alt="card" />
        </div>
      ))}
    </div>
  );
}
