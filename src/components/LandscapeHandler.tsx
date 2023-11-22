import Lottie from "lottie-react";
import phoneRotateAnimation from "../lottie/phoneRotate.json";

export const LandscapeHandler = () => {
  return (
    <div className="flex flex-col items-center h-full justify-evenly px-12">
      <h1 className="text-white100">Bit of a tight fit!</h1>
      <div className="rotate-90 h-[50px] w-[50px] game-over-message-fade-in">
        <Lottie animationData={phoneRotateAnimation}/>
      </div>
      <p className="text-white100">
        We're really sorry but our core content doesn't quite work in landscape mode. Please rotate your device back to
        Portrait.
      </p>
    </div>
  )
}
