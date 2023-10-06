import { useSelector } from "react-redux";
import GameOverMultiComponent from "./GameOverMultiComponent";
import GameOverSingle from "./GameOverSingle";
import GameOverButtons from "./GameOverButtons";

function GameOverMulti() {
  const numPlayers = useSelector((state) => state.settings.numPlayers);
  const p1 = useSelector((state) => state.gamePlay[1].length);
  const p2 = useSelector((state) => state.gamePlay[2].length);
  const p3 = useSelector((state) => state.gamePlay[3].length);
  const p4 = useSelector((state) => state.gamePlay[4].length);

  const stats = [
    { player: 1, score: p1 },
    { player: 2, score: p2 },
    { player: 3, score: p3 },
    { player: 4, score: p4 },
  ];

  let statsFiltered = [];
  for (let i = 0; i < numPlayers; i++) {
    statsFiltered.push(stats[i]);
  }

  const statsSorted = statsFiltered.sort((a, b) => b.score - a.score);

  let winner;
  if (statsSorted[0].score === statsSorted[1].score) {
    winner = "tie";
  } else {
    winner = statsSorted[0].player;
  }

  return (
    <>
      <h1 className="winner">
        {winner === "tie" ? "It's a tie!" : `Player ${winner} Wins!`}
      </h1>
      <p className="game-over-p">Game over! Here are the results...</p>
      <ul className="final-scores">
        {statsSorted.map((item) => (
          <GameOverMultiComponent
            key={item.player}
            item={item}
            topScore={statsSorted[0].score}
          />
        ))}
      </ul>
      <GameOverButtons />
    </>
  );
}

export default GameOverMulti;
