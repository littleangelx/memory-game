import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import GameGrid from "../components/GameGrid";
import MultiplayerScoring from "../components/MultiplayerScoring";
import PlayGameHeader from "../components/PlayGameHeader";
import SoloPlayerScoring from "../components/SoloPlayerScoring";
import { gamePlayActions } from "../store/gamePlaySlice";
import Modal from "../components/Modal";

function PlayGame() {
  const numPlayers = useSelector((state) => state.settings.numPlayers);
  const gridSize = useSelector((state) => state.settings.gridSize);
  const isGameOver = useSelector((state) => state.gamePlay.gameOver);

  const dispatch = useDispatch();

  const gridSizeFixed = gridSize === "4 x 4" ? 4 : 6;

  const theme = useSelector((state) => state.settings.theme);

  const gridCount = (gridSizeFixed * gridSizeFixed) / 2;

  let initialArray;
  if (theme === "Numbers") {
    initialArray = Array.from({ length: gridCount }, (_, i) => i);
  } else if (theme === "Icons" && gridSizeFixed === 4) {
    initialArray = Array("⭐", "✈️", "👜", "🍿", "💵", "📺", "📱", "⚗️");
  } else {
    initialArray = Array(
      "⭐",
      "🍕",
      "🥳",
      "🏅",
      "🤦🏻‍♀️",
      "😊",
      "🚀",
      "✈️",
      "👜",
      "🍿",
      "💵",
      "📺",
      "📱",
      "⚗️",
      "🎺",
      "🪅",
      "🧸",
      "🔮"
    );
  }
  const gridArray = [...initialArray, ...initialArray];

  useEffect(() => {
    if (!isGameOver) {
      dispatch(
        gamePlayActions.initialise({
          numPlayers,
          gridLength: gridSizeFixed * gridSizeFixed,
          gridArray,
        })
      );
    }
  });

  useEffect(() => {
    if (isGameOver) dispatch(gamePlayActions.calculateResults({ numPlayers }));
  }, [isGameOver, dispatch]);

  return (
    <div className="play-game-page">
      <PlayGameHeader gridArray={gridArray} />
      <GameGrid size={gridSizeFixed} />
      {numPlayers === "1" ? <SoloPlayerScoring /> : <MultiplayerScoring />}
      <Modal isOpen={isGameOver} />
    </div>
  );
}

export default PlayGame;
