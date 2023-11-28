import {CloseIcon} from "./CloseIcon";
import React, {useEffect, useState} from "react";
import {LivesLostChart} from "../components/LivesLostChart";
import {FirestoreScoreObjectModel, ScoreBreakdown} from "@/utlities/models";
import {all} from "deepmerge";

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

const getFrequency = (allDocs: FirestoreScoreObjectModel[]) => {
  const frequency = [0,0,0,0,0,0,0];
  allDocs.forEach((scoreObject) => {
    const {livesBonus}  = scoreObject.scoreBreakdown;

    frequency[livesBonus] += 1;

  });
  return frequency;
}
export const ScoreModal = ({onClickClose, allDocs, scoreBreakdown}:ScoreModalProps) => {


  const [fastestKnownTime, setFastestKnownTime] = useState<number>(0);

  const [arrayOfWrongGuessFrequencies, setArrayOfWrongGuessFrequencies] = useState<Array<number>>([])

 useEffect(() => {
   // const result = allDocs.reduce<number>((fastestPLayerTime, item) => {
   //   if (item.scoreBreakdown.timeScore > fastestPLayerTime) {
   //     fastestPLayerTime = item.scoreBreakdown.timeScore
   //   }
   //   return fastestPLayerTime
   // }, 0)
   // setFastestKnownTime(result);

   setArrayOfWrongGuessFrequencies(getFrequency(allDocs).slice(0,-1));

 }, [])

  return (
    <div className="w-full max-w-xl h-fit bg-black300 flex flex-col gap-6 justify-between py-2 px-1 sm:px-4 rounded-md">
      <div className="flex justify-between w-full my-2 px-2">
        <h1 className="text-white100 font-display">Your Score</h1>
        <CloseIcon onClick={onClickClose} color="#f8f8f8" size={28}/>
      </div>
      <h1 className="text-white100 font-display">Your Total Score: {scoreBreakdown.timeScore + scoreBreakdown.livesBonus + scoreBreakdown.gloryBonus}</h1>
      <h1 className="text-white100 font-display">Fastest Known Time: {fastestKnownTime}</h1>
      <LivesLostChart dataSet={arrayOfWrongGuessFrequencies} livesLost={scoreBreakdown.livesBonus} />

    </div>
  )
}
