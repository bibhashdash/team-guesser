import {GameState} from "../utlities/models";
import {CharacterStorageBox} from "./CharacterStorageBox";

export interface WordStorageBoxProps {
  matcherWord: string;
  userSubmissionArray: Array<string>;
  gameState: GameState;
  squareSize: number;
}

export const WordStorageBox = ({matcherWord, userSubmissionArray, gameState, squareSize}: WordStorageBoxProps) => {
  return (
    <div className="flex gap-1 w-full h-full justify-stretch items-stretch">
      {
        gameState === GameState.gameStarted ? (
          matcherWord.split('').map((item, index) =>
            <CharacterStorageBox
              squareSize={squareSize}
              backgroundColor={userSubmissionArray.includes(item.toLowerCase()) ? 'bg-green400' : 'bg-white100'}
              character={userSubmissionArray.includes(item.toLowerCase()) ? item : ''} />
          )
        ) :
          (
            matcherWord.split('').map((item, index) =>
              <CharacterStorageBox
                squareSize={squareSize}
                backgroundColor={userSubmissionArray.includes(item.toLowerCase()) ? 'bg-green400' : 'bg-red500'}
                character={item} />
          ))
      }
    </div>
  )
}
