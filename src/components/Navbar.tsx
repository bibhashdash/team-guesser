import {useState} from "react";
import {MenuIcon} from "@/icons/MenuIcon";
import {CloseIcon} from "@/components/CloseIcon";
import {GameTimer} from "@/components/GameTimer";

interface NavbarProps {
  elapsedMinutes: number,
  elapsedSeconds: number,
  clickRulesIcon: () => void,
  clickRefreshIcon: () => void,
  clickCreditsIcon: () => void,
}

export const Navbar = ({clickRulesIcon, elapsedSeconds, elapsedMinutes, clickRefreshIcon, clickCreditsIcon}: NavbarProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="bg-black300 w-full md:py-2 px-2 md:px-6 flex flex-col gap-2 items-center">
      <div className="flex items-center w-full justify-between">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-sm sm:text-2xl text-white100 font-display">?ERFECT</h1>
        </div>
        <GameTimer elapsedSeconds={elapsedSeconds} elapsedMinutes={elapsedMinutes}/>
        <div className="flex border-2 border-gray50 rounded">
          <div className={`gap-4 md:gap-8 ${!showMenu && 'hidden'} flex px-2 md:px-4 rounded`}>
            <div onClick={() => {clickRulesIcon(); setShowMenu(false)}}
                 className="cursor-pointer flex items-center focus:animate-button-pressed">
              <p className="text-white100 text-xs sm:text-xl hover:text-blue500">Rules</p>
            </div>
            <div onClick={() => {clickRefreshIcon(); setShowMenu(false)}}
                 className="cursor-pointer flex items-center focus:animate-button-pressed">
              <p className="text-white100 text-xs sm:text-xl hover:text-blue500">New Game</p>
            </div>
            <div onClick={() => {clickCreditsIcon(); setShowMenu(false)}}
                 className="cursor-pointer flex items-center focus:animate-button-pressed">
              <p className="text-white100 text-xs sm:text-xl hover:text-blue500">Credits</p>
            </div>
          </div>
          <div onClick={() => setShowMenu(true)}
               className={`cursor-pointer text-white100 text-xs sm:text-xl px-2 md:px-4 ${showMenu && 'hidden'}`}>
            <MenuIcon size={24} color="#f8f8f8"/>
          </div>
          <div onClick={() => setShowMenu(false)}
               className={`${!showMenu && 'hidden'} px-2 md:px-4 text-white100 text-xs sm:text-xl cursor-pointer flex items-center`}>
            <CloseIcon size={24} color="#f8f8f8"/>
          </div>
        </div>
      </div>
    </div>
  )
}
