import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStopwatch } from "react-timer-hook";
import { gamePlayActions } from "../store/gamePlaySlice";

function SoloPlayerScoring() {
  const moves = useSelector((state) => state.gamePlay.moves);
  const openLength = useSelector((state) => state.gamePlay.open.length);
  const isGameOver = useSelector((state) => state.gamePlay.gameOver);
  const isReset = useSelector((state) => state.gamePlay.reset);
  const dispatch = useDispatch();

  const { seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    console.log(openLength, moves);
    if (openLength === 1 && moves === 0) {
      start();
    }
  }, [openLength, moves, start]);

  useEffect(() => {
    if (isGameOver) {
      dispatch(gamePlayActions.updateTimer({ minutes, seconds }));
    }
    reset();
    pause();
  }, [isGameOver]);

  return (
    <div className="solo-player-scoring">
      <div className="timer">
        <p className="solo-cat">Time</p>
        <p className="solo-val">
          {`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`}
        </p>
      </div>
      <div className="moves">
        <p className="solo-cat">Moves</p>
        <p className="solo-val">{moves}</p>
      </div>
    </div>
  );
}

export default SoloPlayerScoring;
