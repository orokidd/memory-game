export function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1 className="game-title">Welcome to the Cat Memory Game</h1>
      <p>Don't click on the same cat twice!</p>
      <button className="start-button" onClick={onStart}>Start Game</button>
    </div>
  );
}
