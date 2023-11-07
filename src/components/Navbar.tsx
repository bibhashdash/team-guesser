import {ClipboardIcon} from "@/icons/ClipboardIcon";
import {RefreshIcon} from "@/icons/RefreshIcon";

interface NavbarProps {
  clickRulesIcon: () => void,
  clickRefreshIcon: () => void
}

export const Navbar = ({clickRulesIcon, clickRefreshIcon}: NavbarProps) => {
  return (
    <div className="bg-black300 w-full py-2 md:py-6 px-6 flex justify-between items-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-lg sm:text-2xl text-white100 font-display">?ERFECT</h1>
        <p className="text-xs text-white100">Hangman for footy teams!</p>
      </div>
      <div className="flex gap-4">
        <div onClick={() => clickRulesIcon()} className="focus:animate-button-pressed">
          <ClipboardIcon size={24} color="rgba(176,176,176,0.46)" />
        </div>
       <div onClick={() => clickRefreshIcon()} className="focus:animate-button-pressed">
         <RefreshIcon size={24} color="rgba(176,176,176,0.46)" />
       </div>
      </div>
    </div>
  )
}
