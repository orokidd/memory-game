export function GameOverBox({ onRestart, bestScore }) {
  return (
    <div className="game-over-overlay">
      <div className="game-over-box">
        <h2>Game Over</h2>
        <p>Your best score was: {bestScore}</p>
        <button onClick={onRestart}>Restart</button>
      </div>
    </div>
  );
}
