import {GameResult, GameState, InputTab} from "../utlities/models";
import {CharacterStorageBox} from "./CharacterStorageBox";
import {useMemo} from "react";

export interface WordStorageBoxProps {
  matcherWord: string;
  userSubmissionArray: Array<string>;
  gameState: GameState;
  squareSize: number;
  gameResult: GameResult;
  inputTab: InputTab;
  userNuclearWord: string;
}

export const WordStorageBox = ({
                                 matcherWord,
                                 userSubmissionArray,
                                 gameState,
                                 squareSize,
                                 gameResult,
                                 inputTab,
                                 userNuclearWord
                               }: WordStorageBoxProps) => {
  const getBgColorAlt = (matcherItem: string, userSubmissionItem: string, tab: InputTab) => {
    let bgAlt = '';
    if (tab === InputTab.oneByOne) {
      userSubmissionArray.includes(matcherItem.toLowerCase()) ? bgAlt = 'bg-green400' : bgAlt = 'bg-red500';
    } else {
      matcherItem.toLowerCase() === userSubmissionItem.toLowerCase() ? bgAlt = 'bg-green400' : bgAlt = 'bg-red500'
    }

    return bgAlt
  }

  return (
    <div
      className={`flex gap-1 w-full justify-center ${gameResult !== GameResult.default && 'animate-game-over-squares'}`}>
      {
        gameState === GameState.gameStarted ? (
            matcherWord.split('').map((item, index) =>
              <CharacterStorageBox
                key={index}
                gameResult={gameResult}
                squareSize={squareSize}
                backgroundColor={userSubmissionArray.includes(item.toLowerCase()) ? 'bg-green400' : 'bg-white100'}
                character={userSubmissionArray.includes(item.toLowerCase()) ? item : ''}/>
            )
          ) :
          (
            matcherWord.split('').map((item, index) =>
              <CharacterStorageBox
                key={index}
                gameResult={gameResult}
                squareSize={squareSize}
                backgroundColor={getBgColorAlt(item, userNuclearWord[index], inputTab)}
                character={item}/>
            ))
      }
    </div>
  )
}
