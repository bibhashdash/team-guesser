interface CharacterStorageBoxProps {
  character?: string;
  backgroundColor?: string;
  squareSize: number;
}

export const CharacterStorageBox = ({character, backgroundColor, squareSize}: CharacterStorageBoxProps) => {
  console.log(squareSize)
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
            fontSize: `${squareSize <= 30 ? (squareSize * 2 / 3) : (squareSize * 5.5 / 10)}px`,
          }
        }
    >
      <p className="text-center text-white100">
        {character}
      </p>
    </div>
  )
}
