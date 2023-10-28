import {CharacterStorageBox} from "@/components/CharacterStorageBox";
import {WordStorageBox} from "@/components/WordStorageBox";

interface WhiteSquaresContainerProps {
  matcherText: string;
  text?: string;
  textSingleCharacter?: string;
}

export const WhiteSquaresContainer = ({text, matcherText, textSingleCharacter}: WhiteSquaresContainerProps) => {
  const xyz = matcherText.split(' ');
  const tempArray = new Array(matcherText.length).fill(<CharacterStorageBox character={''}/>);
  return (
    <>
      {
        xyz.map((word, index) =>
          <WordStorageBox textSingleCharacter={textSingleCharacter ?? ''} matcherWord={word} length={word.length} userInput={text ?? ''} />
        )
      }
    </>
  )
}
