interface CharacterStorageBoxProps {
  character?: string;
  backgroundColor?: string;
  squareSize: number;
}

export const CharacterStorageBox = ({character, backgroundColor, squareSize}: CharacterStorageBoxProps) => {
  return (
    <div
      className={`mt-1 flex justify-center items-center ${backgroundColor}`}
      style=
        {
          {
            width: `${squareSize}px`,
            height: `${squareSize}px`,
            maxWidth: "100px",
            maxHeight: "100px",
            fontSize: `${(squareSize * 6 / 10)}px`,
          }
        }
    >
      <p className="text-center text-white100">
        {character}
      </p>
    </div>
  )
}
