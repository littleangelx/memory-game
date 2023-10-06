import { useSelector } from "react-redux";

import GameOverMulti from "./GameOverMulti";
import GameOverSingle from "./GameOverSingle";

function Modal({ isOpen }) {
  const numPlayers = useSelector((state) => state.settings.numPlayers);

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <div className="game-over-modal">
          {numPlayers === 1 ? <GameOverSingle /> : <GameOverMulti />}
        </div>
      </div>
    </div>
  );
}

export default Modal;
