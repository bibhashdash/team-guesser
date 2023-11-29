import React from "react";
import {TimerIcon} from "@/icons/TimerIcon";

interface TimeBonusAnalysisProps {
  userBonus: number,
  bestBonus: number,
}

export const TimeBonusAnalysis = ({userBonus, bestBonus}: TimeBonusAnalysisProps) => {
  const widthPercentage = Math.floor((userBonus / bestBonus) * 100);
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="text-white100 text-sm flex gap-2 justify-center">
        <TimerIcon color="rgba(176,176,176,0.96)" size={20} />
        <span className="text-blue500 font-bold font-display">YOU</span> v <span className="font-display text-white50 font-bold">The Best</span>
      </p>

      <div className="bg-blue500 h-8 flex items-center justify-center font-display" style={{
        width: `${widthPercentage}%`
      }}>{userBonus}</div>
      <div className="bg-white50 h-8 w-full flex items-center justify-center font-display">
        {bestBonus}
      </div>
    </div>
  )
}
