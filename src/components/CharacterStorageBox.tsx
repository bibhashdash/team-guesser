interface CharacterStorageBoxProps {
  character?: string;
  backgroundColor?: string;
}

export const CharacterStorageBox = ({character, backgroundColor}: CharacterStorageBoxProps) => {

  return (
    <div
      className={`rounded-md h-6 w-6 min-[400px]:w-10 min-[400px]:h-10 md:h-12 md:w-12 lg:h-16 lg:w-16 mt-1 flex justify-center items-center ${backgroundColor}`}>
      <p className="w-full md:text-3xl lg:text-5xl text-center text-white100">
        {character}
      </p>
    </div>
  )
}
