import {ButtonPrimary} from "@/components/ButtonPrimary";
import {WhiteSquaresContainer} from "@/components/WhiteSquaresContainer";
import {GameResult, GameState, InputTab} from "@/utlities/models";
import {FootballIcon} from "@/icons/FootballIcon";
import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar";

interface GamePageInitialReminderProps {
  onClickClose: () => void,
}

export const GamePageInitialReminder = ({onClickClose}: GamePageInitialReminderProps) => {
  return (
    <div className="w-full max-w-[400px] h-fit bg-black300 flex flex-col gap-6 justify-between py-2 px-2 sm:px-4 rounded-md">
      <WhiteSquaresContainer
        matcherText={"Perfect"}
        userSubmissionArray={["p", "e", "r", "f", "e", "c", "t"]}
        gameState={GameState.gameOver}
        gameResult={GameResult.win}
        inputTab={InputTab.oneByOne}
        nuclearInputFullString={""}
      />
      <p className="text-white100">
        A hangman-style game for football team names? Go on then!
      </p>
      <div className="flex justify-evenly">
        <div className="flex flex-col items-center justify-between">
          <div className="w-20 flex self-center items-center justify-self-center">
            <CircularProgressbarWithChildren
              value={60}
              maxValue={60}
              background
              backgroundPadding={8}
              styles={buildStyles({
                backgroundColor: "#0079cb",
                textColor: "#f8f8f8",
                pathColor: "#f8f8f8",
                trailColor: "transparent"
              })}
            >
              <p className="text-white100 text-sm md:text-lg font-display p-2">
                60</p>
            </CircularProgressbarWithChildren>
          </div>
          <p className="text-white100 font-display">60 Seconds</p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <FootballIcon color={'#ec0202'} size={90} />
          {/*<p className="text-white100 font-display">7</p>*/}
          <p className="text-white100 font-display">7 Chances</p>
        </div>
      </div>
      <p className="text-white100">Play it one character at a time, or in one shot, it's your choice. The quicker you solve it the more bonuses you earn!</p>
      <div className="w-fit self-center">
        <ButtonPrimary buttonContent="I'm ready, start the timer!" onClickButton={onClickClose} />
      </div>
    </div>
  )
}
