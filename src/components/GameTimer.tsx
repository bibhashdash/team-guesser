import {useEffect, useState} from "react";
import dayjs, {Dayjs} from "dayjs";

interface GameTimerProps {
  elapsedTime: number,
}

export const GameTimer = ({elapsedTime}:GameTimerProps) => {

  return (
    <div className="flex gap-0.5">
      <p className="text-white100 text-xs">{elapsedTime}</p>
    </div>
  )
}
