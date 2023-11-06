import {GameResult, GameState} from "../utlities/models";
import {CharacterStorageBox} from "./CharacterStorageBox";

export interface WordStorageBoxProps {
  matcherWord: string;
  userSubmissionArray: Array<string>;
  gameState: GameState;
  squareSize: number;
  gameResult: GameResult;
}

export const WordStorageBox = ({matcherWord, userSubmissionArray, gameState, squareSize, gameResult}: WordStorageBoxProps) => {
  return (
    <div className={`flex gap-1 w-full justify-center ${gameResult === GameResult.win && 'animate-bounce-once'}`}>
      {
        gameState === GameState.gameStarted ? (
          matcherWord.split('').map((item, index) =>
            <CharacterStorageBox
              gameResult={gameResult}
              squareSize={squareSize}
              backgroundColor={userSubmissionArray.includes(item.toLowerCase()) ? 'bg-green400' : 'bg-white100'}
              character={userSubmissionArray.includes(item.toLowerCase()) ? item : ''} />
          )
        ) :
          (
            matcherWord.split('').map((item, index) =>
              <CharacterStorageBox
                gameResult={gameResult}
                squareSize={squareSize}
                backgroundColor={userSubmissionArray.includes(item.toLowerCase()) ? 'bg-green400' : 'bg-red500'}
                character={item} />
          ))
      }
    </div>
  )
}
