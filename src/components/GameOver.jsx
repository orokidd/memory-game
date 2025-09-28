export function GameOver({ bestScore, onRestart, gameWon }) {
  return (
    <div className="game-over-overlay">
      <div className="game-over-box">
        <h2>{gameWon ? "Congratulations! You Won!" : "Game Over!"}</h2>
        <p>Best Score: {bestScore}</p>
        <button className="restart-button" onClick={onRestart}>Restart</button>
      </div>
    </div>
  );
}
