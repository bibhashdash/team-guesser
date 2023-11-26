import React, {useState} from "react";
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import {Button, MenuItem} from "@mui/material";
import {MenuIcon} from "@/icons/MenuIcon";
import {CloseIcon} from "@/components/CloseIcon";
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(() => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    border: "2px solid #4d4d4d",
    minWidth: 180,
    color: "#f8f8f8",
    backgroundColor: "#2d2d2d",
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
      },
    },
    '& .MuiMenuItem-root:hover': {
      backgroundColor: "#0079cb"
    }
  },
}));

interface MainMenuProps {
  clickRulesIcon: () => void,
  clickRefreshIcon: () => void,
  clickCreditsIcon: () => void,
}

export const MainMenu = ({clickRulesIcon, clickRefreshIcon, clickCreditsIcon}: MainMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | undefined | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        { !open ? <MenuIcon size={28} color={'#f8f8f8'}/> : <CloseIcon color={'#f8f8f8'} size={28} /> }
      </Button>
      <StyledMenu
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
      </StyledMenu>
    </div>
  )
}
