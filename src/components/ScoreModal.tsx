import {CloseIcon} from "@/components/CloseIcon";
import React from "react";

interface ScoreModalProps {
  onClickClose: () => void;
  score: number,
}

export const ScoreModal = ({onClickClose, score}:ScoreModalProps) => {
  return (
    <div className="w-[400px] h-fit bg-black300 flex flex-col gap-6 justify-between py-2 px-1 sm:px-4 rounded-md">
      <div className="flex justify-between w-full my-2 px-2">
        <h1 className="text-white100 font-display">Your Score</h1>
        <CloseIcon onClick={onClickClose} color="#f8f8f8" size={28}/>
      </div>

      <p className="text-white100 text-2xl font-display text-center">
        {score}
      </p>
    </div>
  )
}
