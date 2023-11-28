import {CloseIcon} from "./CloseIcon";
import React, {useEffect, useState} from "react";
import {LivesLostChart} from "../components/LivesLostChart";
import {FirestoreScoreObjectModel, ScoreBreakdown} from "@/utlities/models";

export type Dictionary<T> = {
  [key: string]: T;
}

interface ScoreModalProps {
  onClickClose: () => void;
  allDocs: Array<FirestoreScoreObjectModel>;
  scoreBreakdown: ScoreBreakdown;
}

// interface ScoreModalUtils {
//   timeComparison: {
//     myTimeScore: number,
//     fastestKnownTimeScore: number,
//   },
//   wrongGuessCountComparison: Array<number>
// }


export const ScoreModal = ({onClickClose, allDocs, scoreBreakdown}:ScoreModalProps) => {

  const getFrequency = () => {
    const frequency = [0, 0, 0, 0, 0, 0, 0];
    allDocs.forEach((scoreObject) => {
      const {livesBonus}  = scoreObject.scoreBreakdown;

        frequency[livesBonus] += 1;

    });
    return frequency;
  }
  const defaultArrayOfWrongGuessFrequencies: Array<number> = new Array(7).fill(0);
  const [fastestKnownTime, setFastestKnownTime] = useState<number>(60);

  const [arrayOfWrongGuessFrequencies, setArrayOfWrongGuessFrequencies] = useState<Array<number>>(defaultArrayOfWrongGuessFrequencies)

 useEffect(() => {
   const result = allDocs.reduce<number>((fastestPLayerTime, item) => {
     if (item.scoreBreakdown.timeScore > fastestPLayerTime) {
       fastestPLayerTime = item.scoreBreakdown.timeScore
     }
     return fastestPLayerTime
   }, 60)
   setFastestKnownTime(result);

   setArrayOfWrongGuessFrequencies(getFrequency().slice(0,-1));

 }, [allDocs])

  return (
    <div className="w-full max-w-xl h-fit bg-black300 flex flex-col gap-6 justify-between py-2 px-1 sm:px-4 rounded-md">
      <div className="flex justify-between w-full my-2 px-2">
        <h1 className="text-white100 font-display">Your Score</h1>
        <CloseIcon onClick={onClickClose} color="#f8f8f8" size={28}/>
      </div>
      <LivesLostChart dataSet={arrayOfWrongGuessFrequencies} livesLost={7 - scoreBreakdown.livesBonus} />

    </div>
  )
}
