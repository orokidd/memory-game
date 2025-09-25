export function Card({ cards, onCardClick }) {
  return (
    <div className="card-container">
      {cards.map((card) => (
        <div className="card" key={card.id} onClick={() => onCardClick(card.id)}>
          <img className="card-image" src={card.img} alt="card" />
        </div>
      ))}
    </div>
  );
}
