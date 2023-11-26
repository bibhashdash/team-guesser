import {GameControlContextState} from "@/contexts/gamecontrol/index";
import {useEffect, useMemo, useState} from "react";
import {FirestoreScoreObjectModel, GameResult, GameState, ScoreBreakdown} from "@/utlities/models";
import {useStopwatch} from "react-timer-hook";

export function useGameControlContextState(): GameControlContextState {
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [wrongGuessCount, setWrongGuessCount] = useState<number>(0);
  const [gameState, setGameState] = useState<GameState>(GameState.gameDefault);
  const [gameResult, setGameResult] = useState<GameResult>(GameResult.default);
  const [gameResultMessage, setGameResultMessage] = useState<string>('');

  const [scoreBreakdown, setScoreBreakdown] = useState<ScoreBreakdown>({
    timeScore: 0,
    livesBonus: 0,
    gloryBonus: 0
  })
  const [gameScore, setGameScore] = useState<FirestoreScoreObjectModel>({
    totalScore: 0,
    scoreBreakdown: {
      timeScore: 0,
      livesBonus: 0,
      gloryBonus: 0
    },
    datePlayed: ""
  })
  const {seconds, pause, reset, minutes} = useStopwatch();

  // if game result is default and game state is started then start the timer
  useEffect(() => {
    if (gameState === GameState.gameOver) {
      setTimerSeconds(seconds);
      pause();
    }
  }, [gameResult, gameState])

  useEffect(() => {
    if (gameState === GameState.gameStarted && gameResult === GameResult.default) {
      setTimerSeconds(seconds);
    }
  }, [seconds])

  const updateGameState = (state: GameState) => {
    setGameState(state);
  }

  const updateGameResult = (result: GameResult) => {
    setGameResult(result);
  }

  const updateScore = (score: ScoreBreakdown, datePlayed: string) => {
    setGameScore({
      datePlayed: datePlayed,
      scoreBreakdown: score,
      totalScore: score.timeScore + score.gloryBonus + score.livesBonus
    })
  }

  const updateScoreBreakdown = (scoreBreakdown: ScoreBreakdown) => {
    setScoreBreakdown({
      timeScore: scoreBreakdown.timeScore,
      gloryBonus: scoreBreakdown.gloryBonus,
      livesBonus: scoreBreakdown.livesBonus
    })
  }

  const updateGameResultMessage = (message: string) => {
    setGameResultMessage(message);
  }

  const updateWrongGuessCount = (count: number) => {
    setWrongGuessCount(count);
  }

  return {
    gameState,
    gameResult,
    updateGameState,
    timerSeconds,
    updateGameResult,
    updateScore,
    pause,
    reset,
    minutes,
    scoreBreakdown,
    updateScoreBreakdown,
    updateGameResultMessage,
    wrongGuessCount,
    gameResultMessage,
    updateWrongGuessCount
  }
}
