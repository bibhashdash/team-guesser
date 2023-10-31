import {GameState} from "../utlities/models";
import {CharacterStorageBox} from "./CharacterStorageBox";

export interface WordStorageBoxProps {
  matcherWord: string;
  userSubmissionArray: Array<string>;
  gameState: GameState;
}

export const WordStorageBox = ({matcherWord, userSubmissionArray, gameState = GameState.gameStarted}: WordStorageBoxProps) => {
  return (
    <div className="flex gap-1 w-full">
      {
        gameState === GameState.gameStarted ? (
          matcherWord.split('').map((item, index) =>
            <CharacterStorageBox
              backgroundColor={userSubmissionArray.includes(item.toLowerCase()) ? 'bg-green400' : 'bg-white100'}
              character={userSubmissionArray.includes(item.toLowerCase()) ? item : ''} />
          )
        ) :
          (
            matcherWord.split('').map((item, index) =>
              <CharacterStorageBox
                backgroundColor={userSubmissionArray.includes(item.toLowerCase()) ? 'bg-green400' : 'bg-red500'}
                character={userSubmissionArray.includes(item.toLowerCase()) ? item : userSubmissionArray[index]} />
          ))
      }
    </div>
  )
}
