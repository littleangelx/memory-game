import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { gamePlayActions } from "../store/gamePlaySlice";
import { useState } from "react";
import Menu from "./Menu";

function PlayGameHeader({ gridArray }) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1201px)" });
  const isSmallScreen = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1200px)",
  });
  const isTinyScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const numPlayers = useSelector((state) => state.settings.numPlayers);

  window.localStorage.setItem("numPlayers", numPlayers);

  function handleShowMenu() {
    setShowMenu(true);
  }

  function handleCloseMenu() {
    setShowMenu(false);
  }

  console.log(showMenu);

  return (
    <div className="play-game-header">
      <div className="title title-game-page">Memory</div>
      <div className="menu-buttons">
        {isTinyScreen && (
          <button className="btn-orange" onClick={handleShowMenu}>
            Menu
          </button>
        )}
        {!isTinyScreen && (
          <>
            <button
              className="btn-orange"
              onClick={() => {
                window.location.reload(false);
              }}
            >
              Restart
            </button>
            <button
              className="btn-light-blue-play"
              onClick={() => {
                dispatch(gamePlayActions.restartGame());
                navigate("/");
              }}
            >
              New Game
            </button>
          </>
        )}
        {showMenu && (
          <div className="overlay">
            <div className="menu">
              <button
                className="btn-orange"
                onClick={() => {
                  window.location.reload(false);
                }}
              >
                Restart
              </button>
              <button
                className="btn-light-blue"
                onClick={() => {
                  dispatch(gamePlayActions.restartGame());
                  navigate("/");
                }}
              >
                New Game
              </button>
              <button className="btn-light-blue" onClick={handleCloseMenu}>
                Resume Game
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlayGameHeader;
