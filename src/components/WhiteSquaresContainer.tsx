import {WordStorageBox} from "./WordStorageBox";
import {GameState} from "@/utlities/models";

export interface WhiteSquaresContainerProps {
  matcherText: string;
  userSubmissionArray: Array<string>;
  gameState: GameState;
}

export const WhiteSquaresContainer = ({matcherText, userSubmissionArray, gameState}: WhiteSquaresContainerProps) => {
  const arrayOfDecksOfWhiteSquares = matcherText.split(' ');
  return (
    <div className="">
      {
        arrayOfDecksOfWhiteSquares.map((word, index) =>
          <WordStorageBox gameState={gameState} matcherWord={word} userSubmissionArray={userSubmissionArray} />
        )
      }
    </div>
  )
}
