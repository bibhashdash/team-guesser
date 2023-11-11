import {ClipboardIcon} from "@/icons/ClipboardIcon";
import {RefreshIcon} from "@/icons/RefreshIcon";
import {HandHeartIcon} from "@/icons/HandHeartIcon";
import {useState} from "react";
import {MenuIcon} from "@/icons/MenuIcon";
import {CloseIcon} from "@/components/CloseIcon";

interface NavbarProps {
  clickRulesIcon: () => void,
  clickRefreshIcon: () => void,
  clickCreditsIcon: () => void,
}

export const Navbar = ({clickRulesIcon, clickRefreshIcon, clickCreditsIcon}: NavbarProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="bg-black300 w-full md:py-2 px-2 md:px-6 flex flex-col gap-2 items-center">
      <div>
        <p className="text-white100 text-xs md:text-xl italic">Think you know your football team names?</p>
      </div>
      <div className="flex items-center w-full justify-between">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-sm sm:text-2xl text-white100 font-display">?ERFECT</h1>
        </div>
        <div className="flex">
          <div onClick={() => setShowMenu(true)} className={`cursor-pointer text-white100 text-xs sm:text-xl px-2 md:px-4 ${showMenu && 'hidden'}`}>
            <MenuIcon size={20} color="#f8f8f8" />
          </div>
          <div className={`gap-4 md:gap-8 ${!showMenu && 'hidden'} flex border-2 border-gray50 px-2 md:px-4 rounded`}>
            <div onClick={() => clickRulesIcon()} className="cursor-pointer flex items-center focus:animate-button-pressed">
              {/*<ClipboardIcon size={24} color="rgba(176,176,176,0.46)" />*/}
              <p className="text-black50 text-xs sm:text-xl hover:text-blue500">Rules</p>
            </div>
            <div onClick={() => clickRefreshIcon()} className="cursor-pointer flex items-center focus:animate-button-pressed">
              {/*<RefreshIcon size={24} color="rgba(176,176,176,0.46)" />*/}
              <p className="text-black50 text-xs sm:text-xl hover:text-blue500">New Game</p>
            </div>
            <div onClick={() => clickCreditsIcon()} className="cursor-pointer flex items-center focus:animate-button-pressed">
              {/*<HandHeartIcon size={24} color="rgba(176,176,176,0.46)" />*/}
              <p className="text-black50 text-xs sm:text-xl hover:text-blue500">Credits</p>
            </div>
          </div>
          <div onClick={() => setShowMenu(false)} className={`${!showMenu && 'hidden'} text-white100 text-xs sm:text-xl cursor-pointer flex items-center`}>
            <CloseIcon size={20} color="#f8f8f8" />
          </div>
        </div>
      </div>
    </div>
  )
}
