import { useSelector } from "react-redux";

import MultiplayerButton from "./MultiplayerButton";

function MultiplayerScoring() {
  const players = useSelector((state) => state.gamePlay.scores);

  return (
    <ul className="multiplayer-score">
      {players.map((player) => (
        <MultiplayerButton
          key={player.number}
          number={player.number}
          score={player.score}
        />
      ))}
    </ul>
  );
}

export default MultiplayerScoring;
