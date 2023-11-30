import {ButtonPrimary} from "@/components/ButtonPrimary";
import {WhiteSquaresContainer} from "@/components/WhiteSquaresContainer";
import {GameResult, GameState, InputTab} from "@/utlities/models";

interface GamePageInitialReminderProps {
  onClickClose: () => void,
}

export const GamePageInitialReminder = ({onClickClose}: GamePageInitialReminderProps) => {
  return (
    <div className="w-[400px] h-fit bg-black300 flex flex-col gap-6 justify-between py-2 px-1 sm:px-4 rounded-md">
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

      <p className="text-white100">Play it one character at a time, or in one shot, it's your choice. The quicker you solve it the more bonuses you earn!</p>
      <div className="w-fit self-center">
        <ButtonPrimary buttonContent="I'm ready, start the timer!" onClickButton={onClickClose} />
      </div>
    </div>
  )
}
