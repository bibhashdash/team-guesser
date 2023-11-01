interface CharacterStorageBoxProps {
  character?: string;
  backgroundColor?: string;
}

export const CharacterStorageBox = ({character, backgroundColor}: CharacterStorageBoxProps) => {

  return (
    <div
      className={`rounded-md h-4 w-4 min-[400px]:h-5 min-[400px]:w-5 min-[500px]:w-7 min-[500px]:h-7 min-[600px]:w-9 min-[600px]:h-9 md:h-11 md:w-11 lg:h-16 lg:w-16 mt-1 flex justify-center items-center ${backgroundColor}`}>
      <p className="w-full md:text-3xl lg:text-5xl text-center text-white100">
        {character}
      </p>
    </div>
  )
}
