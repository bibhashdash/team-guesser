import {GameState} from "@/utlities/models";
import {buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface GameTimerProps {
  gameState: GameState,
  elapsedSeconds: number,
  elapsedMinutes: number,
}

export const GameTimer = ({elapsedSeconds}:GameTimerProps) => {

  return (
    <div className="flex gap-0.5 items-center">
      <div className="w-10 md:w-16">
        <CircularProgressbarWithChildren
          value={elapsedSeconds}
          maxValue={60}
          background
          backgroundPadding={8}
          styles={buildStyles({
            backgroundColor: "#0079cb",
            textColor: "#f8f8f8",
            pathColor: "#f8f8f8",
            trailColor: "transparent"
          })}
        >
          <p className="text-white100 text-xxs md:text-lg font-display p-2">
            {elapsedSeconds}</p>
        </CircularProgressbarWithChildren>
      </div>

    </div>
  )
}
