import Lottie from "lottie-react";
import bouncingBallAnimation from "../lottie/bouncingBall.json"
export const SplashScreen = () => {
  return (
    <>
      <div className="game-over-message-fade-in">
        <h1 className="font-display text-white100 text-5xl">?ERFECT</h1>
      </div>
      <div className="h-[300px] w-[300px] game-over-message-fade-in">
        <Lottie animationData={bouncingBallAnimation} />
      </div>
    </>
  )
}
