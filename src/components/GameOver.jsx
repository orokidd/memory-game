export function GameOver({ score, bestScore, onRestart }) {
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Game Over!</h2>
            <p>Your Score: {score}</p>
            <p>Best Score: {bestScore}</p>
            <button onClick={onRestart} style={{ padding: "0.5rem 1rem", fontSize: "1rem", cursor: "pointer" }}>Restart Game</button>
        </div>
    );
}