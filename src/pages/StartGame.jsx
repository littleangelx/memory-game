import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { settingsActions } from "../store/settingsSlice";
import store from "../store/store";
import GridItem from "../components/GridItem";

function StartGame() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentTheme = useSelector((state) => state.settings.theme);
  const currentNumPlayers = useSelector((state) => state.settings.numPlayers);
  const currentGridSize = useSelector((state) => state.settings.gridSize);

  function handleClick(setterFn, button) {
    dispatch(setterFn(button));
  }

  return (
    <div className="start-page">
      <h1 className="title title-start-page">Memory</h1>
      <main className="options-start-game">
        <GridItem
          heading="Select Theme"
          buttons={["Numbers", "Icons"]}
          current={currentTheme}
          setterFn={settingsActions.setTheme}
          onClick={handleClick}
        />
        <GridItem
          heading="Number of Players"
          buttons={[1, 2, 3, 4]}
          current={currentNumPlayers}
          setterFn={settingsActions.setNumPlayers}
          onClick={handleClick}
        />
        <GridItem
          heading="Grid Size"
          buttons={["4 x 4", "6 x 6"]}
          current={currentGridSize}
          setterFn={settingsActions.setGridSize}
          onClick={handleClick}
        />
        <button
          className="btn-orange-start"
          onClick={() => navigate("/play-game")}
        >
          Start Game
        </button>
      </main>
    </div>
  );
}

export default StartGame;
