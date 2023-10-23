'use client';

import {useEffect, useState} from "react";
import {getTeams} from "@/services/apiService";

interface WordStorageBoxProps {
  word: string;
  userInput: string[];
}

interface CharacterStorageBoxProps {
  character: string;
  revealed: boolean;
}

const CharacterStorageBox = ({character, revealed}: CharacterStorageBoxProps) => {
  return (
    <div
      className={`border-2 border-black h-8 w-8 sm:w-10 sm:h-10 md:h-12 md:w-12 md:text-3xl lg:text-5xl lg:h-16 lg:w-16 rounded-md m-1 flex justify-center items-center text-white100 ${revealed ? 'bg-green400' : 'bg-white100'}`}>
      {character}
    </div>
  )
}

const WordStorageBox = ({word, userInput}: WordStorageBoxProps) => {
  return (
    <div className="flex">
      {
        word.split("").map((character, index) => <CharacterStorageBox character={character}
                                                                      revealed={userInput.includes(character.toLowerCase())}/>)
      }
    </div>
  )
}

export default function Home() {

  const [team, setTeam] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [userNuclearInput, setUserNuclearInput] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [userSubmissionArray, setUserSubmissionArray] = useState<string[]>([]);

  useEffect(() => {
    getTeams().then(data => {
      const random = Math.floor(Math.random() * data.length);
      setTeam(data[random]["full-name"]);
    });
  }, []);
  const handleUserInputSubmission = () => {

    const regex = /^[A-Za-z0-9]*$/;
    if (!regex.test(userInput)) {
      setError(true);
      setInterval(() => {
        setError(false)
      }, 2000);
      return;
    } else {
      userSubmissionArray.push(userInput.toLowerCase());
      setUserInput('');
    }
  }
  const handleNuclearSubmission = () => {
    if (userNuclearInput.toLowerCase() === team.toLowerCase()) {
      setUserSubmissionArray(team.toLowerCase().split(""));
    }
    console.log(userSubmissionArray);
  }


  return (
    <main className="flex min-h-screen flex-col items-center pt-24 bg-black300">
      <h1 className="text-white100 text-3xl sm:text-4xl">Team Name Guesser</h1>
      <h2 className="text-white100">Like Hangman, but for football teams!</h2>

      <div className="border-2 border-black h-full w-full max-w-5xl rounded-md p-2">
        <div id="chances-box">
          {}
        </div>
        <div id="team-name" className="flex flex-col items-center">
          {
            team.split(" ").map((item, index) => (
              <div>
                <WordStorageBox word={item} userInput={userSubmissionArray}/>
              </div>
            ))
          }
        </div>
        <div id="user-input" className="mt-6 w-full flex justify-center gap-2 sm:gap-6 items-center">
          <p className="text-white100">Enter a character</p>

          <input maxLength="1" value={userInput} onChange={(event) => setUserInput(event.target.value)}
                 className="w-24 h-24 rounded-md text-5xl text-center"/>
          <button onClick={() => handleUserInputSubmission()}
                  className="px-6 py-2 rounded-md border-2 border-black bg-white100">Submit
          </button>
        </div>
        <div className="mt-6 w-full flex justify-evenly items-center gap-2 sm:gap-6">
          <input placeholder="Chance it in one..." value={userNuclearInput}
                 onChange={(event) => setUserNuclearInput(event.target.value)}
                 className="w-full h-20 rounded-md text-xl sm:text-xl md:text-3xl lg:text-5xl text-center"/>
          <button onClick={() => handleNuclearSubmission()}
                  className="px-6 py-2 rounded-md border-2 border-black bg-white100">Go Nuclear!
          </button>
        </div>
        {
          error && <p className="text-red-500">Please enter a valid character</p>
        }
      </div>
    </main>
  )
}
