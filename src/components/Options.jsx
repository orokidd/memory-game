export function Options({ resetGame }) {
  return (
    <div className="options">
      <button onClick={resetGame}>Reset</button>
    </div>
  );
}