export function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1 className="game-title">Welcome to the Cat Memory Game</h1>
      <p>Don't click on the same cat twice!</p>
      <div className="difficulty-buttons">
        {/* <button className="start-button" onClick={onStart}>Start Game</button> */}
        <button className="start-button" onClick={() => onStart('easy')}>Easy</button>
        <button className="start-button" onClick={() => onStart('medium')}>Medium</button>
        <button className="start-button" onClick={() => onStart('hard')}>Hard</button>
      </div>
    </div>
  );
}
