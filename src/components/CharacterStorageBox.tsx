import {GameResult} from "../utlities/models";
import {useEffect, useRef} from "react";
import {className} from "postcss-selector-parser";

interface CharacterStorageBoxProps {
  character?: string;
  backgroundColor?: string;
  squareSize: number;
  gameResult: GameResult;
}

export const CharacterStorageBox = ({character, backgroundColor, squareSize, gameResult}: CharacterStorageBoxProps) => {
  const characterStorageRef = useRef<HTMLParagraphElement | null>(null);
  if (character !=='' && character !== undefined && characterStorageRef.current) {
    characterStorageRef.current?.classList.add('animate-character-into-view');
  }
  return (
    <div
      className={`mt-1 flex justify-center items-center ${backgroundColor}`}

      style=
        {
          {
            width: `${squareSize}px`,
            height: `${squareSize}px`,
            maxWidth: "50px",
            maxHeight: "50px",
            fontSize: `${squareSize <= 40 ? 20 : 30}px`,
          }
        }
    >
      <p className="text-center text-white100" ref={characterStorageRef}>
        {character}
      </p>
    </div>
  )
}
