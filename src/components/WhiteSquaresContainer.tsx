import {WordStorageBox} from "./WordStorageBox";

export interface WhiteSquaresContainerProps {
  matcherText: string;
  userSubmissionArray: Array<string>;
}

export const WhiteSquaresContainer = ({matcherText, userSubmissionArray}: WhiteSquaresContainerProps) => {
  const arrayOfDecksOfWhiteSquares = matcherText.split(' ');
  return (
    <>
      {
        arrayOfDecksOfWhiteSquares.map((word, index) =>
          <WordStorageBox matcherWord={word} userSubmissionArray={userSubmissionArray} />
        )
      }
    </>
  )
}
