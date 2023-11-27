import {CloseIcon} from "./CloseIcon";
import React, {useEffect, useState} from "react";
import {GameTimer} from "./GameTimer";
import {FootballIcon} from "../icons/FootballIcon";
import {DividerLine} from "./DividerLine";
import {MedalIcon} from "../icons/MedalIcon";
import {ScoreBreakdown} from "../utlities/models";
import {useApiService} from "../services/apiService";
import {Speedometer} from "../components/Speedometer";
import Lottie from "lottie-react";
import fireAnimation from "../lottie/fireAnime.json"
import {useGameControlContext} from "@/contexts/gamecontrol";

interface ScoreModalProps {
  onClickClose: () => void;
  scoreBreakdown: ScoreBreakdown,
}

export const ScoreModal = ({onClickClose, scoreBreakdown}:ScoreModalProps) => {
  const [fastestKnownTime, setFastestKnownTime] = useState<number>(60);
  const {getAllDocsFromDatabase, allDocsFromDatabase} = useGameControlContext();
  useEffect(() => {
    getAllDocsFromDatabase();
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
    <div className="w-[400px] h-fit bg-black300 flex flex-col gap-6 justify-between py-2 px-1 sm:px-4 rounded-md">
      <div className="flex justify-between w-full my-2 px-2">
        <h1 className="text-white100 font-display">Your Score</h1>
        <CloseIcon onClick={onClickClose} color="#f8f8f8" size={28}/>
      </div>
      <div className="flex justify-evenly">
        <Speedometer speed={scoreBreakdown.timeScore} maxSpeed={fastestKnownTime} />
        <div className="flex flex-col items-center">
          <p className="text-white100 text-sm w-full">Va Va Voom!</p>
          <div className="w-full">
            <Lottie loop={false} style={{height: '75px', width: '100px'}} animationData={fireAnimation} />
          </div>

        </div>
      </div>
      <div className="px-4 grid grid-cols-12">
        <div className="col-span-3 flex justify-center w-full">
          <GameTimer elapsedSeconds={60 - scoreBreakdown.timeScore} />
        </div>
        <p className="text-white100 col-span-6 flex items-center justify-center">Time gained</p>
        <p className="text-white100 font-display col-span-3 flex items-center justify-end">{scoreBreakdown.timeScore}</p>
      </div>
      <div className="px-4 grid grid-cols-12">
        <div className="col-span-3 flex relative">
          <div className="flex justify-evenly items-center w-full">
            <FootballIcon size={28} color="#ec0202" />
            <p className="text-white100 font-display">{7 - scoreBreakdown.livesBonus}</p>
          </div>

        </div>
        <p className="text-white100 col-span-6 flex items-center justify-center">Lives bonus</p>
        <p className="text-white100 font-display col-span-3 flex items-center justify-end">{scoreBreakdown.livesBonus}</p>
      </div>
      <div className="px-4 grid grid-cols-12">
        <div className="col-span-3 flex justify-center w-full">
          <MedalIcon color="#ffc100" size={28} />
        </div>
        <p className="text-white100 col-span-6 flex items-center justify-center">Glory Points</p>
        <p className="text-white100 font-display col-span-3 flex items-center justify-end">{scoreBreakdown.gloryBonus}</p>
      </div>
      <DividerLine style={"dashed"} />
      <div className="flex justify-between px-4 grid grid-cols-12">
        <p className="col-span-6 text-left text-blue500 font-bold font-display text-xl">TOTAL</p>
        <p className="col-span-6 text-right text-blue500 font-bold font-display text-xl">{scoreBreakdown.timeScore + scoreBreakdown.livesBonus + scoreBreakdown.gloryBonus}</p>
      </div>
    </div>
  )
}
