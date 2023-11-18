import {WrongGuessMarkers} from "@/components/WrongGuessMarkers";
import {ButtonPrimary} from "@/components/ButtonPrimary";
import {DividerLine} from "@/components/DividerLine";
import {AffiliateAd} from "@/components/AffiliateAd";

interface GamePageInitialReminderProps {
  onClickClose: () => void,
}

export const GamePageInitialReminder = ({onClickClose}: GamePageInitialReminderProps) => {
  return (
    <div className="w-[400px] h-fit bg-black300 flex flex-col gap-6 justify-between py-2 px-1 sm:px-4 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="text-white100">Quick reminder!</h1>
      </div>

      <p className="text-white100">
        Welcome to ?ERFECT, the hangman-style game for football team names. Test yourself against 7 chances and against the clock!
      </p>
      <WrongGuessMarkers wrongGuessCount={6}/>
      <p className="text-white100">You have 60 seconds per game. The quicker you solve it the more points you score. So be ready for that timer!</p>
      <ButtonPrimary buttonContent="I'm ready, let's start!" onClickButton={onClickClose} />
    </div>
  )
}
