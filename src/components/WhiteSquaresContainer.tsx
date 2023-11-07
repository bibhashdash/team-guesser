'use client';

import {WordStorageBox} from "./WordStorageBox";
import {GameResult, GameState} from "@/utlities/models";
import React, {useRef} from "react";

export interface WhiteSquaresContainerProps {
  matcherText: string;
  userSubmissionArray: Array<string>;
  gameState: GameState;
  gameResult: GameResult;
}

export const WhiteSquaresContainer = ({
                                        matcherText,
                                        userSubmissionArray,
                                        gameState,
                                        gameResult
                                      }: WhiteSquaresContainerProps) => {
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
    <div id="white-squares-container" className="w-full h-full px-2 flex flex-col gap-2 content-center">
      {
        matcherText ? (
            arrayOfDecksOfWhiteSquares.map((word, index) =>
              <WordStorageBox gameResult={gameResult}
                              squareSize={squareSize}
                              gameState={gameState}
                              matcherWord={word}
                              key={index}
                              userSubmissionArray={userSubmissionArray}/>
            )
          ) :
          <div className="w-full h-full flex justify-center">
           <p className="text-white100 text-center">Loading...</p>
          </div>
      }
    </div>
  )
}
