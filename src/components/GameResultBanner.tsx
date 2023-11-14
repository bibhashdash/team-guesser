import {GameResult} from "@/utlities/models";
import React from "react";

interface GameResultBannerProps {
  gameResult: GameResult,
  onButtonClick: () => void,
}

export const GameResultBanner = ({gameResult, onButtonClick}: GameResultBannerProps) => {
  return (
    <div className="absolute w-full h-full bg-black300 opacity-95">
      <div className="absolute top-0 w-full h-full flex flex-col gap-6 justify-center items-center game-over-message-fade-in">
        <h1 className="text-7xl text-white100">
          {
            gameResult === GameResult.win ? 'WINNER!' : 'BAD LUCK!'
          }
        </h1>
        <button
          onClick={onButtonClick}
          className="px-4 py-2 bg-blue500 text-white100 rounded">
          New Game
        </button>
      </div>
    </div>
  )
}
