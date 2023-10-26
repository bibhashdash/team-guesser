import {CharacterStorageBox} from "@/components/CharacterStorageBox";
import {GameState} from "@/utlities/models";

interface WordStorageBoxProps {
  word: string;
  userInput: string[];
  gameState: GameState;
}

export const WordStorageBox = ({word, userInput, gameState}: WordStorageBoxProps) => {
  return (
    <div className="flex gap-1">
      {
        gameState === GameState.gameStarted ?
          word.split("")
            .map((character, index) =>
              <CharacterStorageBox
                character={character}
                bgColor={userInput.includes(character.toLowerCase()) ? 'bg-green400' : 'bg-white100'}
              />) :
          word.split("")
            .map((character, index) =>
              <CharacterStorageBox
                character={word.split('')[index]}
                bgColor={word.split('')[index] === character ? 'bg-green400' : 'bg-red500'}
              />)
      }
    </div>
  )
}
