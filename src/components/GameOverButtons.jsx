import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { gamePlayActions } from "../store/gamePlaySlice";

function GameOverButtons() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="game-over-buttons">
      <button
        className="btn-orange"
        onClick={() => {
          dispatch(gamePlayActions.restartGame());
          navigate("/play-game");
        }}
      >
        Restart
      </button>
      <button
        onClick={() => {
          dispatch(gamePlayActions.restartGame());
          navigate("/");
        }}
      >
        Setup New Game
      </button>
    </div>
  );
}

export default GameOverButtons;
