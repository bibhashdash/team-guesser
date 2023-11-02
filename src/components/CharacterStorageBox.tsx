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
            maxWidth: "80px",
            maxHeight: "80px",
          }
        }
    >
      <p className="md:text-3xl lg:text-5xl text-center text-white100">
        {character}
      </p>
    </div>
  )
}
