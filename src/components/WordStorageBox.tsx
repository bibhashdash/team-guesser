import {CharacterStorageBox} from "./CharacterStorageBox";
import {GameState} from "@/utlities/models";

export interface WordStorageBoxProps {
  length: number;
  matcherWord: string;
  userInput?: string;
  textSingleCharacter: string;
}
// TODO: This is the wrong way to do this. Currently all the hidden letters are visible in the dev tools. Find a way to populate rather than just reveal.
export const WordStorageBox = ({matcherWord, length, userInput, textSingleCharacter}: WordStorageBoxProps) => {
  console.log(matcherWord.split(''));
  return (
    <div className="flex gap-1 w-full">
      {
        matcherWord.split('').map((item, index) =>
          <CharacterStorageBox character={item} />
        )
      }
    </div>
  )
}
