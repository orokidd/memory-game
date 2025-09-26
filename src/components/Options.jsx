export function Options({ resetGame }) {
  return (
    <div className="options">
      <button onClick={resetGame}>New Game</button>
    </div>
  );
}