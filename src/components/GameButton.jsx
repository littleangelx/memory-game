import { useDispatch, useSelector } from "react-redux";

import { gamePlayActions } from "../store/gamePlaySlice";

function GameButton({ idx, style, children }) {
  const dispatch = useDispatch();
  const numPlayers = useSelector((state) => state.settings.numPlayers);
  const buttonStatus = useSelector((state) => state.gamePlay.buttons[idx]);
  const openIndices = useSelector((state) => state.gamePlay.openIndices);
  const shuffledArray = useSelector((state) => state.gamePlay.shuffledArray);

  return (
    <button
      className={`game-button ${
        buttonStatus === 0
          ? "covered"
          : buttonStatus === 1
          ? "uncovered"
          : "chosen"
      }`}
      style={style}
      onClick={() => {
        if (openIndices.indexOf(idx) !== -1) return;
        dispatch(
          gamePlayActions.open({
            idx: idx,
            button: children,
            numPlayers: Number(numPlayers),
            shuffledArray: shuffledArray,
          })
        );
        setTimeout(() => {
          dispatch(gamePlayActions.changeColour());
        }, 800);
      }}
    >
      <span className="button-number-or-image">{children}</span>
    </button>
  );
}

export default GameButton;
