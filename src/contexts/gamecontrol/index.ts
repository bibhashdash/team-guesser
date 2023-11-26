import {GameResult, GameState, ScoreBreakdown} from "@/utlities/models";
import {createContext, useContext} from "react";

export interface GameControlContextState {
  timerSeconds: number,
  minutes: number,
  gameState: GameState,
  gameResult: GameResult,
  updateScore: (score: ScoreBreakdown, datePlayed: string) => void,
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
  updateGameResult: () => {},
  updateGameState: () => {},
  updateScore: () => {},
  pause: () => {},
  reset: () => {}
});

export function useGameControlContext() {
  return useContext(GameControlContext);
}
