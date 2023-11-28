import {CloseIcon} from "./CloseIcon";
import React, {useEffect, useState} from "react";
import {Speedometer} from "../components/Speedometer";
import {useGameControlContext} from "../contexts/gamecontrol";
import {LivesLostChart} from "../components/LivesLostChart";

interface ScoreModalProps {
  onClickClose: () => void;
}

interface ScoreModalUtils {
  timeComparison: {
    myTimeScore: number,
    fastestKnownTimeScore: number,
  },
  wrongGuessCountComparison: number
}

export const ScoreModal = ({onClickClose}:ScoreModalProps) => {
  const [fastestKnownTime, setFastestKnownTime] = useState<number>(60);
  const {getAllDocsFromDatabase, allDocsFromDatabase, scoreBreakdown} = useGameControlContext();
  useEffect(() => {
    if (allDocsFromDatabase.length === 0) {
      getAllDocsFromDatabase();
    }
  }, []);

 useEffect(() => {
   const result = allDocsFromDatabase.reduce<number>((fastestPLayerTime, item) => {
     if (item.scoreBreakdown.timeScore > fastestPLayerTime) {
       fastestPLayerTime = item.scoreBreakdown.timeScore
     }
     return fastestPLayerTime
   }, 60)

   setFastestKnownTime(result);

 }, [allDocsFromDatabase])

  return (
    <div className="w-full max-w-xl h-fit bg-black300 flex flex-col gap-6 justify-between py-2 px-1 sm:px-4 rounded-md">
      <div className="flex justify-between w-full my-2 px-2">
        <h1 className="text-white100 font-display">Your Score</h1>
        <CloseIcon onClick={onClickClose} color="#f8f8f8" size={28}/>
      </div>
      <div className="flex">
        <Speedometer speed={scoreBreakdown.timeScore} maxSpeed={fastestKnownTime} />
      </div>
      <LivesLostChart livesLost={7 - scoreBreakdown.livesBonus} />

    </div>
  )
}
