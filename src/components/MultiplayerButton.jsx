import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

function MultiplayerButton({ number, score }) {
  const isTinyScreen = useMediaQuery({ query: "(max-width: 1200px" });

  const currentPlayer = useSelector((state) => state.gamePlay.currentPlayer);

  return (
    <div
      className={`player-info ${
        currentPlayer === number ? "active-player" : ""
      }`}
    >
      <p className="player-number">
        {isTinyScreen ? `P${number}` : `Player ${number}`}
      </p>
      <p className="player-score">{score}</p>
    </div>
  );
}

export default MultiplayerButton;
