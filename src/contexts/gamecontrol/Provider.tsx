'use client';

import React from "react";
import {useGameControlContextState} from "@/contexts/gamecontrol/state";
import {GameControlContext} from "@/contexts/gamecontrol/index";

interface ChildrenProps {
  children: React.ReactNode,
}

export function GameControlContextProvider({ children }: ChildrenProps) {
  const GameControlState =useGameControlContextState();

  return (
    <GameControlContext.Provider value={GameControlState}>
      {children}
    </GameControlContext.Provider>
  )
}
