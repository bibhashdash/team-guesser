interface CharacterStorageBoxProps {
  character: string;
  bgColor: string;
}

export const CharacterStorageBox = ({character, bgColor}: CharacterStorageBoxProps) => {
  return (
    <div
      className={`h-6 w-6 min-[400px]:w-10 min-[400px]:h-10 md:h-12 md:w-12 md:text-3xl lg:text-5xl lg:h-16 lg:w-16 mt-1 rounded-md flex justify-center items-center text-white100 ${bgColor}`}>
      {character}
    </div>
  )
}
