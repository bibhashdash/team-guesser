import {extendedKeyboardContent, Keymap} from "@/tempData";
import {GameResult, GameState, InputTab} from "@/utlities/models";
import {BackspaceIcon} from "@/icons/BackspaceIcon";
import {ReturnIcon} from "@/icons/ReturnIcon";
import React from "react";
import {GameResultBanner} from "@/components/GameResultBanner";

interface KeyboardProps {
  inputTab: InputTab;
  buttonEffect: boolean;
  buttonEffectCallback: (buttonEffect: boolean) => void;
  onEnterClick: (inputTab: InputTab) => void;
  userInputSubmissionCallback: (key: string, inputTab: InputTab) => void;
  disabledKeysArray: string[];
  gameState: GameState;
  gameResult: GameResult;
  onClickNewGameButton: () => void;
  gameResultMessage: string;
}

export const Keyboard = (
  {
    inputTab,
    buttonEffectCallback,
    onEnterClick,
    userInputSubmissionCallback,
    buttonEffect,
    disabledKeysArray,
    gameState,
    gameResult,
    onClickNewGameButton,
    gameResultMessage
  }: KeyboardProps) => {
  return (
    <div className="relative w-full flex flex-col gap-1 content-center">
      {
        gameState === GameState.gameOver && (
          <GameResultBanner
            gameResultMessage={gameResultMessage}
            gameResult={gameResult}
            onButtonClick={onClickNewGameButton}
          />
        )
      }
      {
        extendedKeyboardContent.map((row, index) =>
          <div key={index} className={`w-full gap-1 ${index === 4 ? 'grid grid-cols-12' : 'flex'}`}>
            {
              row.map((keyMap, index) =>
                <button
                  key={keyMap.id}
                  onClick={() => {
                    buttonEffectCallback(true);
                    keyMap.key === "ENTER" ? onEnterClick(inputTab) : userInputSubmissionCallback(keyMap.key, inputTab);
                  }}
                  onAnimationEnd={() => buttonEffectCallback(false)}
                  className={`
                    ${keyMap.row < 4 && 'focus:animate-ping-once '} 
                    ${keyMap.row === 4 && buttonEffect && 'focus:animate-button-pressed '}
                    ${keyMap.key === "DEL" || keyMap.key === "ENTER" ? 'col-span-3' : keyMap.key === "SPACE" ? 'col-span-6' : null}  
                    ${inputTab === InputTab.oneByOne && disabledKeysArray.includes(keyMap.key)
                    ? 'bg-black300 text-gray50'
                    : 'bg-gray50 text-blue300 hover:bg-black100'}
                      cursor-pointer m-0 w-full py-2 lg:py-4 flex items-center justify-center max-[320px]:text-xs 
                      `}
                  disabled={inputTab === InputTab.oneByOne ? disabledKeysArray.includes(keyMap.key) : false}
                >
                  {
                    keyMap.key === "DEL" ? (<BackspaceIcon size={24} color="#54b4ff"/>)
                      :
                      keyMap.key === "ENTER" ? (<ReturnIcon size={24} color="#54b4ff"/>)
                        :
                        keyMap.key === "SPACE" ? ' '
                          : keyMap.key
                  }
                </button>
              )
            }
          </div>
        )
      }
    </div>
  )
}
