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
      <h1 className="text-white100 font-display self-center text-7xl">{scoreBreakdown.timeScore + scoreBreakdown.livesBonus + scoreBreakdown.gloryBonus}</h1>
      <LivesLostChart dataSet={scoreAnalysis.livesBonusDataset} livesLost={scoreBreakdown.livesBonus}/>
      <TimeBonusAnalysis userBonus={scoreBreakdown.timeScore} bestBonus={scoreAnalysis.biggestTimeBonus} />
    </div>
  )
}
