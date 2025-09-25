export function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1>Welcome to the Memory Game</h1>
      <p>Don't click on the same card twice!</p>
      <button onClick={onStart}>Start Game</button>
    </div>
  );
}
