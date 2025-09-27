import backIcon from "../assets/back-svg.svg";

export function Options({ resetGame }) {
  return (
    <div className="options">
      <button onClick={resetGame}>
        <img src={backIcon} className="back-button" alt="Back" style={{ width: "24px", height: "24px" }} />
      </button>
    </div>
  );
}
