import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

import GameButton from "./GameButton";

function GameGrid({ size }) {
  const isTinyScreen = useMediaQuery({ query: "(max-width: 520px)" });

  const shuffledArray = useSelector((state) => state.gamePlay.shuffledArray);

  let circleSize;
  if (isTinyScreen) {
    circleSize = size === 4 ? "2rem" : "1.5rem";
  } else {
    circleSize = size === 4 ? "5rem" : "3rem";
  }

  return (
    <div
      className="game-grid"
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
      }}
    >
      {shuffledArray.map((item, idx) => (
        <GameButton
          key={idx}
          idx={idx}
          style={{ width: circleSize, height: circleSize }}
        >
          {item}
        </GameButton>
      ))}
    </div>
  );
}

export default GameGrid;
