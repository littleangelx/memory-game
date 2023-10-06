import { useSelector } from "react-redux";
import GameOverButtons from "./GameOverButtons";

function GameOverSingle() {
  const minutes = useSelector((state) => state.gamePlay.minutes);
  const seconds = useSelector((state) => state.gamePlay.seconds);
  const moves = useSelector((state) => state.gamePlay.moves);

  return (
    <>
      <h1 className="winner">You did it!</h1>
      <p className="game-over-p">Game over! Here's how you got on...</p>
      <ul className="final-scores">
        <div className="final-score">
          <span className="final-score-title">Time Elapsed</span>
          <span className="final-moves">
            {minutes}:{seconds < 10 ? "0" + seconds : seconds}
          </span>
        </div>
        <div className="final-score">
          <span className="final-score-title">Moves Taken</span>
          <span className="final-moves">{moves} Moves</span>
        </div>
      </ul>
      <GameOverButtons />
    </>
  );
}

export default GameOverSingle;
