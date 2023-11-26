import React, {useEffect, useState} from "react";
import {MenuIcon} from "@/icons/MenuIcon";
import {CloseIcon} from "@/components/CloseIcon";
import {GameTimer} from "@/components/GameTimer";
import {GameState} from "@/utlities/models";
import {Button, Menu, MenuItem} from "@mui/material";

interface NavbarProps {
  gameState: GameState,
  elapsedMinutes: number,
  elapsedSeconds: number,
  clickRulesIcon: () => void,
  clickRefreshIcon: () => void,
  clickCreditsIcon: () => void,
}

export const Navbar = ({clickRulesIcon, elapsedSeconds, clickRefreshIcon, clickCreditsIcon, gameState}: NavbarProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | undefined | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (gameState === GameState.gameOver) setShowMenu(false);
  }, [gameState])

  return (
    <div className="bg-black300 w-full md:py-2 px-2 md:px-6 flex flex-col gap-2 items-center">
      <div className="flex items-center w-full justify-between">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xs sm:text-2xl text-white100 font-display">?ERFECT</h1>
        </div>
        <div className="">
          <GameTimer elapsedSeconds={elapsedSeconds} />
        </div>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon size={28} color={'#f8f8f8'} />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={() => {handleClose(); clickRefreshIcon()}}>New Game</MenuItem>
            <MenuItem onClick={() => {handleClose(); clickRulesIcon()}}>Rules</MenuItem>
            <MenuItem onClick={() => {handleClose(); clickCreditsIcon()}}>Credits</MenuItem>
          </Menu>
        </div>      </div>
    </div>
  )
}
