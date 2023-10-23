'use client';

import {useEffect, useState} from "react";
import {getTeams, Team} from "@/services/apiService";
import {tempData} from "@/tempData";

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
  const competitionIdsArray: Array<number> = [1, 2,];
  const [team, setTeam] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [userNuclearInput, setUserNuclearInput] = useState<string>('');

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [userSubmissionArray, setUserSubmissionArray] = useState<string[]>([]);
  const [disableInput, setDisableInput] = useState<boolean>(false);

  const [successMessage, setSuccessMessage] = useState<string>('');

  const setTheTeam = (teams:string[]) => {
    const random = Math.floor(Math.random() * teams.length);
    setTeam(teams[random]);
  }

  const checkValidInput = (input: string) => {
    const regex = /^[A-Za-z0-9]*$/;
    if (regex.test(input) || input.includes(" ")) {
      return true;
    }
  }

  useEffect(() => {
    // const allTeamsInLocalStorage = JSON.parse(localStorage.getItem("teams"));
    // if (allTeamsInLocalStorage && allTeamsInLocalStorage.length > 0) {
    //   setTheTeam(allTeamsInLocalStorage);
    // } else {
    //   let tempTeams: string[] = [];
    //   for (let i = 0; i < competitionIdsArray.length; i++) {
    //     getTeams(competitionIdsArray[i]).then((result) => {
    //       tempTeams.push(...result);
    //       if (i === competitionIdsArray.length - 1) {
    //
    //         localStorage.setItem("teams", JSON.stringify(tempTeams));
    //         setTheTeam(tempTeams);
    //
    //       }
    //     });
    //   }
    // }
    setTheTeam(tempData);
  }, []);


  const handleUserInputSubmission = () => {

    if (!checkValidInput(userInput)) {
      setErrorMessage("Please enter a valid character");
      setInterval(() => {
        setErrorMessage(null)
      }, 2000);
      return;
    } else {
      userSubmissionArray.push(userInput.toLowerCase());
      setUserInput('');
    }
  }
  const handleNuclearSubmission = () => {
    if (!checkValidInput(userNuclearInput)) {
      setErrorMessage("Invalid character present");
      setInterval(() => {
        setErrorMessage(null)
      }, 2000);
      return;
    }
    if (userNuclearInput.toLowerCase() === team.toLowerCase()) {
      setUserSubmissionArray(team.toLowerCase().split(""));
      setDisableInput(true);
      setSuccessMessage("You won!");
    } else {
      setErrorMessage("Wrong guess, game over!");
      setInterval(() => {
        setErrorMessage(null)
      }, 2000);
      setDisableInput(true);
    }
  }


  return (
    <main className="flex min-h-screen flex-col items-center pt-2 bg-black300">
      <h1 className="text-white100 text-3xl sm:text-4xl">Team Name Guesser</h1>
      <h2 className="text-white100">Like Hangman, but for football teams!</h2>

      <div className="h-full w-full max-w-5xl rounded-md p-2">
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
                 disabled={disableInput}
                 className="w-24 h-24 rounded-md text-5xl text-center"/>
          <button onClick={() => handleUserInputSubmission()}
                  disabled={disableInput}
                  className="px-6 py-2 rounded-md border-2 border-black bg-white100">Submit
          </button>
        </div>
        <div className="mt-6 w-full flex justify-evenly items-center gap-2 sm:gap-6">
          <input placeholder="Chance it in one..." value={userNuclearInput}
                 onChange={(event) => setUserNuclearInput(event.target.value)}
                 disabled={disableInput}
                 className="w-full h-20 rounded-md text-xl sm:text-xl md:text-3xl lg:text-5xl text-center"/>
          <button onClick={() => handleNuclearSubmission()}
                  disabled={disableInput}
                  className="px-6 py-2 rounded-md border-2 border-black bg-white100">Go Nuclear!
          </button>
        </div>
        {
          errorMessage != '' && <p className="text-red500">{errorMessage}</p>
        }
        {
          successMessage != '' && <p className="text-green400 text-center">{successMessage}</p>
        }
      </div>
      <div>
        <p className="text-white100 text-center text-sm px-4">
          TNG uses data from the Football Web Pages API. All teams are based on the following leagues: English
          Premier League, English Championship with more to be added on in due course.
        </p>
      </div>
    </main>
  )
}
