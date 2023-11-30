import {ButtonPrimary} from "@/components/ButtonPrimary";
import {WhiteSquaresContainer} from "@/components/WhiteSquaresContainer";
import {GameResult, GameState, InputTab} from "@/utlities/models";
import {GameTimer} from "@/components/GameTimer";
import {FootballIcon} from "@/icons/FootballIcon";

interface GamePageInitialReminderProps {
  onClickClose: () => void,
}

export const GamePageInitialReminder = ({onClickClose}: GamePageInitialReminderProps) => {
  return (
    <div className="w-full max-w-[400px] h-fit bg-black300 flex flex-col gap-6 justify-between py-2 px-1 sm:px-4 rounded-md">
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
          <GameTimer elapsedSeconds={60} />
          <p className="text-white100 font-display">Seconds</p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <FootballIcon color={'#ec0202'} size={40} />
          <p className="text-white100 font-display">7</p>
          <p className="text-white100 font-display">Chances</p>
        </div>
      </div>
      <p className="text-white100">Play it one character at a time, or in one shot, it's your choice. The quicker you solve it the more bonuses you earn!</p>
      <div className="w-fit self-center">
        <ButtonPrimary buttonContent="I'm ready, start the timer!" onClickButton={onClickClose} />
      </div>
    </div>
  )
}
