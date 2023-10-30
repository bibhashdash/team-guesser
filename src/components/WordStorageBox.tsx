import {CharacterStorageBox} from "./CharacterStorageBox";

export interface WordStorageBoxProps {
  matcherWord: string;
  userSubmissionArray: Array<string>;
}

export const WordStorageBox = ({matcherWord, userSubmissionArray}: WordStorageBoxProps) => {
  console.log(userSubmissionArray);
  return (
    <div className="flex gap-1 w-full">
      {
        matcherWord.split('').map((item, index) =>
          <CharacterStorageBox backgroundColor={userSubmissionArray.includes(item.toLowerCase()) ? 'bg-green400' : 'bg-white100'} character={userSubmissionArray.includes(item.toLowerCase()) ? item : ''} />
        )
      }
    </div>
  )
}
