import {buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, {useEffect, useState} from "react";

const ProgressProvider = ({valueStart, valueEnd, children}: {valueStart: number, valueEnd: number, children:any}) => {
  const [value, setValue] = useState<number>(valueStart);
  useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value as number);
};
export default ProgressProvider;


export interface SpeedometerProps {
  speed: number,
  maxSpeed: number,
}

export const Speedometer = ({maxSpeed, speed}: SpeedometerProps) => {
  return (
    <div className="relative w-[200px] h-[200px]">
      <div className="absolute">
        <ProgressProvider valueStart={0} valueEnd={speed}>
          {
            (value: number) => <CircularProgressbarWithChildren
              value={value}
              maxValue={maxSpeed}
              circleRatio={0.5}
              strokeWidth={20}
              styles={buildStyles(
                {
                  pathColor: `${speed < (maxSpeed * 0.5) ? '#399b10' : '#ff5b00'}`,
                  rotation: 3 / 4,
                  strokeLinecap: "butt",
                  textColor: "#f8f8f8",
                  trailColor: "#f8f8f8",
                },

              )}
            >
              <p className="-translate-y-10 font-display text-white100">
                {speed}
              </p>
            </CircularProgressbarWithChildren>
          }
        </ProgressProvider>
      </div>
      <div
        className="flex flex-col w-full items-center w-fit absolute top-[50%] -translate-y-[80%] left-[50%] -translate-x-[50%] border-b-4 border-blue500 rounded">
        <ProgressProvider valueStart={0} valueEnd={speed}>
          {
            (value: number) => <div className="w-[2px] h-[50px] bg-white50 origin-bottom transition-transform duration-200"
                          style={{
                            transform: `rotate(${((value / maxSpeed) * 180) - 90}deg)`,

                          }}
            >

            </div>
          }
        </ProgressProvider>
        <div className="rounded-full bg-blue500 w-2 h-2 -translate-y-1">

        </div>
      </div>
    </div>
  )
}
