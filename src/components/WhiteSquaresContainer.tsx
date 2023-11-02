'use client';

import {WordStorageBox} from "./WordStorageBox";
import {GameState} from "@/utlities/models";
import React, {useRef} from "react";

export interface WhiteSquaresContainerProps {
  matcherText: string;
  userSubmissionArray: Array<string>;
  gameState: GameState;
}

export const WhiteSquaresContainer = ({matcherText, userSubmissionArray, gameState}: WhiteSquaresContainerProps) => {
   const [squareSize, setSquareSize] = React.useState(0);
   const [containerSize, setContainerSize] = React.useState(0);
   const tempArray = matcherText.split(" ");
  let longestWordLength = 0;
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i].length > longestWordLength) {
      longestWordLength = tempArray[i].length;
    }
  }


 React.useEffect(() => {
   const resizeObserver = new ResizeObserver(entries => {
     for (let entry of entries) {
       if (entry.contentBoxSize) {
         setContainerSize(entry.contentBoxSize[0].inlineSize);
       }
     }
   });
     resizeObserver.observe(document.getElementById("white-squares-container")!);
 }, []);


  React.useEffect(() => {
    setSquareSize(containerSize ? Math.floor(containerSize / longestWordLength) : 4);
  }, [containerSize]);

  const arrayOfDecksOfWhiteSquares = matcherText.split(' ');
  return (
    <div id="white-squares-container" className="w-full h-full px-2 flex flex-col gap-2">
      {
        arrayOfDecksOfWhiteSquares.map((word, index) =>
          <WordStorageBox squareSize={squareSize} gameState={gameState} matcherWord={word} userSubmissionArray={userSubmissionArray} />
        )
      }
    </div>
  )
}
