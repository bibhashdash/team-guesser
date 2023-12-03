import React, {useEffect, useState} from "react";
import {MenuIcon} from "@/icons/MenuIcon";
import {CloseIcon} from "@/components/CloseIcon";
import {GameTimer} from "@/components/GameTimer";
import {GameState} from "@/utlities/models";
import {Button, Menu, MenuItem} from "@mui/material";
import {MainMenu} from "@/components/MainMenu";
import {EnvelopeIcon} from "@/icons/EnvelopeIcon";

interface NavbarProps {
  gameState: GameState,
  elapsedMinutes: number,
  elapsedSeconds: number,
  clickRulesIcon: () => void,
  clickRefreshIcon: () => void,
  clickCreditsIcon: () => void,
  clickFeedbackIcon: () => void,
  countBeforeFeedbackPrompt: number,
}

export const Navbar = ({
                         clickRulesIcon,
                         elapsedSeconds,
                         clickRefreshIcon,
                         clickCreditsIcon,
                         clickFeedbackIcon,
                         countBeforeFeedbackPrompt,
                         gameState
                       }: NavbarProps) => {

  return (
    <div className="bg-black300 w-full md:py-2 px-2 md:px-6 flex flex-col gap-2 items-center">
      <div className="flex items-center w-full justify-between">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xs sm:text-2xl text-white100 font-display">?ERFECT</h1>
        </div>

        <GameTimer elapsedSeconds={elapsedSeconds}/>
        <div className="flex items-center">
          <div className={`${countBeforeFeedbackPrompt >= 3 ? 'visible' : 'invisible'}`}>
            <EnvelopeIcon size={28} color={'#f8f8f8'} />
          </div>
          <MainMenu
            clickFeedbackIcon={clickFeedbackIcon}
            clickRulesIcon={clickRulesIcon}
            clickRefreshIcon={clickRefreshIcon}
            clickCreditsIcon={clickCreditsIcon}/>
        </div>

      </div>
    </div>
  )
}
