import {CloseIcon} from "./CloseIcon";
import React from "react";
import {LivesLostChart} from "../components/LivesLostChart";
import {FirestoreScoreObjectModel, ScoreBreakdown} from "@/utlities/models";
import {ScoreAnalysisReturnUtils} from "@/utlities/getScoreAnalysis";
import {TimeBonusAnalysis} from "@/components/TimeBonusAnalysis";

export type Dictionary<T> = {
  [key: string]: T;
}

interface ScoreModalProps {
  onClickClose: () => void;
  allDocs: Array<FirestoreScoreObjectModel>;
  scoreAnalysis: ScoreAnalysisReturnUtils;
  scoreBreakdown: ScoreBreakdown;
}

export const ScoreModal = ({onClickClose, scoreAnalysis, scoreBreakdown}: ScoreModalProps) => {

  return (
    <div className="w-full max-w-xl h-fit bg-black300 flex flex-col gap-6 py-2 px-1 sm:px-4 rounded-md">
      <div className="flex justify-between w-full my-2 px-2">
        <h1 className="text-white100 font-display">Your Score</h1>
        <CloseIcon onClick={onClickClose} color="#f8f8f8" size={28}/>
      </div>
      <div className="flex justify-evenly">
        <div className="flex items-center">
          <h1 className="text-white100 font-display text-7xl">{scoreBreakdown.timeScore + scoreBreakdown.livesBonus + scoreBreakdown.gloryBonus}</h1>
        </div>
        <div className="flex flex-col items-start justify-evenly">
          <p className="text-white100 text-xs">Lives Bonus: <span className="font-display">{scoreBreakdown.livesBonus}</span></p>
          <p className="text-white100 text-xs">Time Bonus: <span className="font-display">{scoreBreakdown.timeScore}</span></p>
          <p className="text-white100 text-xs">One-Shot Bonus: <span className="font-display">{scoreBreakdown.gloryBonus}</span></p>
        </div>
      </div>
      <LivesLostChart dataSet={scoreAnalysis.livesBonusDataset} livesLost={scoreBreakdown.livesBonus}/>
      <TimeBonusAnalysis userBonus={scoreBreakdown.timeScore} bestBonus={scoreAnalysis.biggestTimeBonus} />
    </div>
  )
}
