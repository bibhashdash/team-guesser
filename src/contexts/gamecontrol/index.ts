import {GameResult, GameState, ScoreBreakdown} from "@/utlities/models";
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
  scoreBreakdown: ScoreBreakdown,
  updateScore: (score: ScoreBreakdown, datePlayed: string) => void,
  updateScoreBreakdown: (score: ScoreBreakdown) => void,
  updateGameState: (state: GameState) => void,
  updateGameResult: (result: GameResult) => void,
  pause: () => void,
  reset: () => void,
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
});

export function useGameControlContext() {
  return useContext(GameControlContext);
}
