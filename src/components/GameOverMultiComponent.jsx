function GameOverMultiComponent({ item, topScore }) {
  return (
    <div
      className={`final-score ${item.score === topScore ? "game-winner" : ""}`}
    >
      <span className="final-score-player">
        Player {item.player} {item.score === topScore && "(Winner!)"}
      </span>
      <span className="final-score-pairs">{item.score} pairs</span>
    </div>
  );
}

export default GameOverMultiComponent;
