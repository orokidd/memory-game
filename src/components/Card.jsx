export function Card({ cards, onCardClick }) {
  return (
    <div
      className="card-container"
    >
      {cards.map((card) => (
        <div
          className="card"
          key={card.id}
          onClick={() => onCardClick(card.id)}
        >
          <img
            src={card.img}
            alt="card"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
        </div>
      ))}
    </div>
  );
}
