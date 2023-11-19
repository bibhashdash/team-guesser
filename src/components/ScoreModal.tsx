import {CloseIcon} from "./CloseIcon";
import React from "react";
import {GameTimer} from "./GameTimer";
import {FootballIcon} from "../icons/FootballIcon";
import {DividerLine} from "./DividerLine";

interface ScoreModalProps {
  onClickClose: () => void;
  score: number,
  elapsedSeconds: number,
  wrongGuessCount: number,
}

export const ScoreModal = ({onClickClose, wrongGuessCount, score, elapsedSeconds}:ScoreModalProps) => {

  return (
    <div className="w-[400px] h-fit bg-black300 flex flex-col gap-6 justify-between py-2 px-1 sm:px-4 rounded-md">
      <div className="flex justify-between w-full my-2 px-2">
        <h1 className="text-white100 font-display">Your Score</h1>
        <CloseIcon onClick={onClickClose} color="#f8f8f8" size={28}/>
      </div>
      <div className="px-4 grid grid-cols-12">
        <div className="col-span-3 text-center">
          <GameTimer elapsedSeconds={elapsedSeconds} />
        </div>
        <p className="text-white100 col-span-6 flex items-center justify-center">Time gained</p>
        <p className="text-white100 font-display col-span-3 flex items-center justify-end">{60-elapsedSeconds}</p>
      </div>
      <div className="px-4 grid grid-cols-12">
        <div className="col-span-3 flex relative">
          <div className="flex justify-center items-center">
            <FootballIcon size={60} color="#ec0202" />
            <p className="text-white100 font-display">{wrongGuessCount}</p>
          </div>

        </div>
        <p className="text-white100 col-span-6 flex items-center justify-center">Lives bonus</p>
        <p className="text-white100 font-display col-span-3 flex items-center justify-end">{7 - wrongGuessCount}</p>
      </div>
      <DividerLine style={"dashed"} />
      <div className="flex justify-between px-4 grid grid-cols-12">
        <p className="col-span-6 text-left text-blue500 font-bold font-display text-xl">TOTAL</p>
        <p className="col-span-6 text-right text-blue500 font-bold font-display text-xl">{score}</p>
      </div>
    </div>
  )
}
