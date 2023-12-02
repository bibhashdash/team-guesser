import {FeedbackData, FirestoreScoreObjectModel, GameResult, GameState, ScoreBreakdown} from "../../utlities/models";
import {createContext, useContext} from "react";

export interface GameControlContextState {
  timerSeconds: number,
  minutes: number,
  gameState: GameState,
  gameResult: GameResult,
  gameResultMessage: string,
  updateGameResultMessage: (message: string) => void,
  wrongGuessCount: number,
  updateWrongGuessCount: (count: number) => void,
  allDocsFromDatabase: Array<FirestoreScoreObjectModel>,
  getAllDocsFromDatabase: () => void,
  uploadScoreToDatabase: () => void,
  scoreBreakdown: ScoreBreakdown,
  updateScore: (score: ScoreBreakdown, datePlayed: string) => void,
  updateScoreBreakdown: (score: ScoreBreakdown) => void,
  updateGameState: (state: GameState) => void,
  updateGameResult: (result: GameResult) => void,
  pause: () => void,
  reset: () => void,
  handleFeedback: (feedbackData: FeedbackData) => void,
}

export const GameControlContext = createContext<GameControlContextState>({
  gameResult: GameResult.default,
  gameState: GameState.gameDefault,
  timerSeconds: 0,
  minutes: 0,
  scoreBreakdown: {
    timeScore: 0,
    livesBonus: 0,
    gloryBonus: 0
  },
  wrongGuessCount: 0,
  gameResultMessage: "",
  updateGameResult: () => {},
  updateGameState: () => {},
  updateScore: () => {},
  updateScoreBreakdown: () => {},
  pause: () => {},
  reset: () => {},
  updateGameResultMessage: () => {},
  updateWrongGuessCount: () => {},
  allDocsFromDatabase: [],
  getAllDocsFromDatabase: () => {},
  uploadScoreToDatabase: () => {},
  handleFeedback: () => {}
});

export function useGameControlContext() {
  return useContext(GameControlContext);
}
