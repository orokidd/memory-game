export function Card({ cards, onCardClick }) {
    return (
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => onCardClick(card.id)}
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
              }}
            >
              {card.img}
            </div>
          ))}
        </div>
    );
  };
