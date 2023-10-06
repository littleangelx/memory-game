import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

const initialGameState = {
  1: [],
  2: [],
  3: [],
  4: [],
  currentPlayer: 1,
  shuffledArray: [],
  open: [],
  openIndices: [],
  scores: [],
  buttons: [],
  correct: true,
  moves: 0,
  gameOver: false,
  results: [],
  leagueTable: [],
  minutes: 0,
  seconds: 0,
  menuOpen: false,
};

const gamePlaySlice = createSlice({
  name: "gamePlay",
  initialState: initialGameState,
  reducers: {
    initialise(state, action) {
      for (let i = 0; i < action.payload.numPlayers; i++) {
        state.scores.push({ number: i + 1, score: 0 });
      }
      for (let i = 0; i < action.payload.gridLength; i++) {
        state.buttons[i] = 0;
      }
      state.shuffledArray = action.payload.gridArray.sort(
        () => Math.random() - 0.5
      );
    },
    open(state, action) {
      state.open.push(action.payload.button);
      state.openIndices.push(action.payload.idx);
      state.buttons[action.payload.idx] = 1;
      if (state.open.length > 1) {
        state.moves++;
        if (state.buttons.indexOf(0) === -1) {
          state.gameOver = true;
        }
        if (state.open[0] === state.open[1]) {
          state[state.currentPlayer].push(action.payload.button);
          state.scores[state.currentPlayer - 1].score =
            state[state.currentPlayer].length;
          const [index1, index2] = state.openIndices;
          state.buttons[index1] = 2;
          state.buttons[index2] = 2;
          state.open = [];
          state.openIndices = [];
        } else {
          state.correct = false;
        }
        if (state.currentPlayer === action.payload.numPlayers) {
          state.currentPlayer = 1;
        } else {
          state.currentPlayer++;
        }
      }
    },
    changeColour(state) {
      if (state.correct === false) {
        const [index1, index2] = state.openIndices;
        state.buttons[index1] = 0;
        state.buttons[index2] = 0;
        state.correct = true;
        state.open = [];
        state.openIndices = [];
      }
    },
    shuffleArray(state, action) {
      state.shuffledArray = action.payload.sort(() => Math.random() - 0.5);
    },
    updateTimer(state, action) {
      state.minutes = action.payload.minutes;
      state.seconds = action.payload.seconds;
    },
    calculateResults(state, action) {
      for (let i = 0; i < action.payload.numPlayers; i++) {
        state.results.push({ player: i + 1, points: 0 });
      }
      state.results.sort((a, b) => b.points - a.points);
      for (let i = 0; i < state.results.length; i++) {
        state.leagueTable.push(state.results[i].player);
      }
    },
    restartGame(state) {
      state[1] = [];
      state[2] = [];
      state[3] = [];
      state[4] = [];
      state.currentPlayer = 1;
      state.open = [];
      state.openIndices = [];
      state.scores = [];
      state.buttons = [];
      state.correct = true;
      state.moves = 0;
      state.gameOver = false;
      state.results = [];
      state.leagueTable = [];
      state.minutes = 0;
      state.seconds = 0;
    },
  },
});

export const gamePlayActions = gamePlaySlice.actions;

export default gamePlaySlice.reducer;
