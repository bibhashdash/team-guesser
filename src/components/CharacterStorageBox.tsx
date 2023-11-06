import {GameResult} from "../utlities/models";

interface CharacterStorageBoxProps {
  character?: string;
  backgroundColor?: string;
  squareSize: number;
  gameResult: GameResult;
}

export const CharacterStorageBox = ({character, backgroundColor, squareSize, gameResult}: CharacterStorageBoxProps) => {

  return (
    <div
      className={`mt-1 flex justify-center items-center ${backgroundColor}`}
      style=
        {
          {
            width: `${squareSize}px`,
            height: `${squareSize}px`,
            maxWidth: "70px",
            maxHeight: "70px",
            fontSize: `${squareSize <= 40 ? 20 : 30}px`,
          }
        }
    >
      <p className="text-center text-white100">
        {character}
      </p>
    </div>
  )
}
