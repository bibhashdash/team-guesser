import {useEffect, useState} from "react";
import dayjs, {Dayjs} from "dayjs";

interface GameTimerProps {
  elapsedSeconds: number,
  elapsedMinutes: number,
}

export const GameTimer = ({elapsedSeconds, elapsedMinutes}:GameTimerProps) => {
  return (
    <div className="flex gap-0.5">
      <p className="text-white100 text-xs w-4">{elapsedMinutes} : </p>
      <p className="text-white100 text-xs w-4">
        {elapsedSeconds.toString().length === 1 && '0'}{elapsedSeconds}</p>
    </div>
  )
}
