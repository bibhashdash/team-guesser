import {FootballIcon} from "@/icons/FootballIcon";
import React from "react";

interface WrongGuessMarkersProps {
  wrongGuessCount: number,
}

export const WrongGuessMarkers = ({wrongGuessCount}:WrongGuessMarkersProps) => {
  const wrongGuessArray = new Array(7).fill(<></>)
  return (
    <div className="flex gap-4 w-full justify-center">
      {
        wrongGuessArray.map((item, index) =>
          <div key={index} className={`${index + 1 <= wrongGuessCount ? 'animate-on-wrong-guess' : null}`}>
            <FootballIcon size={20} color={index + 1 <= wrongGuessCount ? '#ec0202' : '#3d3d3d'}/>
          </div>)
      }
    </div>
  )
}
