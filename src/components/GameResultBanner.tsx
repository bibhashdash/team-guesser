import {GameResult} from "@/utlities/models";
import React from "react";
import Lottie from "lottie-react";
import celebrationAnimation from "../lottie/celebration.json"
import formationAnimation from "../lottie/formation.json"
import catAnimation from "../lottie/cat.json"

interface GameResultBannerProps {
  gameResult: GameResult,
  onButtonClick: () => void,
  gameResultMessage: string,
}

export const GameResultBanner = ({gameResult, onButtonClick, gameResultMessage}: GameResultBannerProps) => {
  return (
    <div className="absolute w-full h-full bg-black300 opacity-95 flex justify-center">
      <div className="absolute top-0 w-full h-full flex flex-col gap-2 md:gap-6 items-center game-over-message-fade-in">

          <Lottie style={{height: '75px', width: '100px'}} animationData={ gameResult === GameResult.win ? celebrationAnimation : catAnimation} />

        <h1 className="text-5xl min-[370px]:text-6xl text-white100">
          {gameResultMessage}
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
