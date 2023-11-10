import {ClipboardIcon} from "@/icons/ClipboardIcon";
import {RefreshIcon} from "@/icons/RefreshIcon";
import {HandHeartIcon} from "@/icons/HandHeartIcon";

interface NavbarProps {
  clickRulesIcon: () => void,
  clickRefreshIcon: () => void,
  clickCreditsIcon: () => void,
}

export const Navbar = ({clickRulesIcon, clickRefreshIcon, clickCreditsIcon}: NavbarProps) => {
  return (
    <div className="bg-black300 w-full py-2 md:py-6 px-2 md:px-6 flex justify-between items-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-sm sm:text-2xl text-white100 font-display">?ERFECT</h1>
      </div>
      <div className="flex gap-4 md:gap-8">
        <div onClick={() => clickRulesIcon()} className="cursor-pointer flex flex-col items-center focus:animate-button-pressed">
          <ClipboardIcon size={24} color="rgba(176,176,176,0.46)" />
          <p className="text-black50 text-xs">Rules</p>
        </div>
       <div onClick={() => clickRefreshIcon()} className="cursor-pointer flex flex-col items-center focus:animate-button-pressed">
         <RefreshIcon size={24} color="rgba(176,176,176,0.46)" />
         <p className="text-black50 text-xs">New Game</p>
       </div>
        <div onClick={() => clickCreditsIcon()} className="cursor-pointer flex flex-col items-center focus:animate-button-pressed">
          <HandHeartIcon size={24} color="rgba(176,176,176,0.46)" />
          <p className="text-black50 text-xs">Credits</p>
        </div>
      </div>
    </div>
  )
}
