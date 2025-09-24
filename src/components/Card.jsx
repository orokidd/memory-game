export function Card({ card, onCardClick }) {
  const handleClick = () => {
    if (!card.flipped) {
      onCardClick(card);
    }


    return (  <div className={`card ${card.flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">?</div>
        <div className="card-back">{card.value}</div>
      </div>
    </div>);

  }};