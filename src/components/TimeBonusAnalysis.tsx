import React from "react";

interface TimeBonusAnalysisProps {
  userBonus: number,
  bestBonus: number,
}

export const TimeBonusAnalysis = ({userBonus, bestBonus}: TimeBonusAnalysisProps) => {
  const widthPercentage = Math.floor((userBonus / bestBonus) * 100);
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="text-white100 text-sm">
        How <span className="text-blue500 font-bold">your</span> time bonus stacks up
        against the <span className="text-white50 font-bold">best!</span>
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
