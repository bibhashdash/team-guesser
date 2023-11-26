import {buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useEffect, useState} from "react";

export interface SpeedometerProps {
  speed: number,
  maxSpeed: number,
}

export const Speedometer = ({maxSpeed, speed}: SpeedometerProps) => {
  const [pointerRotation, setPointerRotation] = useState<number>(-90);
  useEffect(() => {
    setPointerRotation(((speed/maxSpeed) * 180) - 90);
  }, [speed, maxSpeed]);

    return (
      <div className="relative" >
        <div className="absolute">
          <CircularProgressbarWithChildren
            value={speed}
            maxValue={maxSpeed}
            circleRatio={0.5}
            strokeWidth={20}
            styles={buildStyles({
              pathColor: "#0079cb",
              rotation: 3/4,
              strokeLinecap: "butt",
              textColor: "#f8f8f8",
              trailColor: "transparent"
            })}
          >
            <p className="-translate-y-4">
              {speed}
            </p>
          </CircularProgressbarWithChildren>
        </div>
        <div className="flex flex-col items-center w-fit absolute left-[50%] top-[100%]">
          <div className="w-[2px] h-32 bg-white50 origin-bottom"
          style={{
            transform: `rotate(${pointerRotation}deg)`
          }}
          >

          </div>
          <div className="rounded-full bg-blue500 w-2 h-2 -translate-y-1">

          </div>
        </div>
      </div>
    )
}
