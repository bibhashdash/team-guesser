import Lottie from "lottie-react";
import hourglassAnimation from "../lottie/hourglass.json"
import {GameState} from "@/utlities/models";

interface GameTimerProps {
  gameState: GameState,
  elapsedSeconds: number,
  elapsedMinutes: number,
}

export const GameTimer = ({elapsedSeconds, elapsedMinutes, gameState}:GameTimerProps) => {
  // const lottieRef = useRef();
  // useEffect(() => {
  //   elapsedMinutes === 1 && lottieRef.current.
  // }, [elapsedMinutes])
  return (
    <div className="flex gap-0.5 items-center">
      <Lottie loop={gameState === GameState.gameStarted ? 60 : 0} style={{height: '40px', width: '40px'}} animationData={hourglassAnimation} />
      <p className="text-white100 text-xs md:text-xl w-4 font-display">
        {elapsedSeconds.toString().length === 1 && '0'}{elapsedSeconds}</p>
    </div>
  )
}
