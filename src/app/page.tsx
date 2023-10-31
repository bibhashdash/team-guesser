'use client';

import {JSX, useEffect, useState} from "react";
import {tempData} from "@/tempData";
import {WordStorageBox} from "@/components/WordStorageBox";
import {checkValidInput} from "@/utlities/checkValidInput";
import {checkFullWord} from "@/utlities/checkFullWord";
import {GameState} from "@/utlities/models";
import {WhiteSquaresContainer} from "@/components/WhiteSquaresContainer";
import {getTeams} from "@/services/apiService";

export default function Home() {
  // premier league, c'ship, L1, L2, scottish prem, Ligue 1, Bundesliga, serie a, la liga
  const competitionIdsArray: Array<number> = [1, 2, 3, 4, 17, 91, 92, 93, 94];
  const [team, setTeam] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [userNuclearInput, setUserNuclearInput] = useState<string>('');
  const [guessCount, setGuessCount] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [userSubmissionArray, setUserSubmissionArray] = useState<string[]>([]);
  const [disableInput, setDisableInput] = useState<boolean>(false);
  const [gameState, setGameState] = useState<GameState>(GameState.gameStarted);
  const [successMessage, setSuccessMessage] = useState<string>('');

  const setTheTeam = (teams: string[]) => {
    const random = Math.floor(Math.random() * teams.length);
    setTeam(teams[random]);
  }

  useEffect(() => {
    // let tempTeams: string[] = [];
    // for (let i = 0; i < competitionIdsArray.length; i++) {
    //   getTeams(competitionIdsArray[i]).then((result) => {
    //     tempTeams.push(...result);
    //     if (i === competitionIdsArray.length - 1) {
    //      console.log(tempTeams);
    //      return;
    //       localStorage.setItem("teams", JSON.stringify(tempTeams));
    //       setTheTeam(tempTeams);
    //
    //     }
    //   });
    // }
    setTheTeam(tempData);
  }, []);


  const handleUserInputSubmission = (text: string) => {

    if (!checkValidInput(text)) {
      setErrorMessage("Please enter a valid character");
      setInterval(() => {
        setErrorMessage('')
      }, 2000);
      return;
    } else {
      setGuessCount(prevState => prevState + 1);
    }
    handleValidInput(text, guessCount);
  }

  const handleValidInput = (input: string, count: number) => {

    if (!team.toLowerCase().includes(input.toLowerCase())) {
      setUserInput('');
      // this is temporary, we will have the crosses at the top to signify wrong guesses
      setErrorMessage("Character not present");
      setInterval(() => {
        setErrorMessage('')
      }, 1000);
      return;
    }
    else {
      if (checkFullWord(userSubmissionArray.join(), team)) {
        setUserSubmissionArray(team.toLowerCase().split(""));
        setUserInput('');
        setDisableInput(true);
        setSuccessMessage("You won!");
        setGameState(GameState.gameOver);
      }
      else {
        userSubmissionArray.push(userInput.toLowerCase());
        setUserInput('');
      }
    }
    if (userSubmissionArray.length === team.trim().length) {
      setGameState(GameState.gameOver);
    }
  }

  const handleNuclearSubmission = (text: string) => {
    if (!checkValidInput(text)) {
      setErrorMessage("Invalid character present");
      setInterval(() => {
        setErrorMessage('')
      }, 2000);
      return;
    }

    if (text.toLowerCase().split(' ').length !== team.toLowerCase().split(' ').length) {
      setErrorMessage("Error! Number of words do not match");
      setInterval(() => {
        setErrorMessage('')
      }, 2000);
      return;
    }

    if (text.length !== team.length) {
      setErrorMessage("Error! Number of characters do not match");
      setInterval(() => {
        setErrorMessage('')
      }, 2000);
      return;
    }

    if (checkFullWord(text, team)) {
      setUserSubmissionArray(team.toLowerCase().split(""));
      setDisableInput(true);
      setSuccessMessage("You won!");
      setGameState(GameState.gameOver);
    }

    else {
      setUserSubmissionArray(text.toLowerCase().split(""));
      setErrorMessage("Wrong guess, game over!");
      setDisableInput(true);
      setGameState(GameState.gameOver);
    }
  }

  return (
    <main className="min-h-screen w-full max-w-5xl grid grid-rows-12 pt-2 items-center justify-center">
      <div className="row-span-3 px-2 flex flex-col items-center">
        <h1 className="text-white100 text-2xl sm:text-3xl sm:text-4xl">Team Name Guesser</h1>
        <h2 className="text-white100 text-sm">Like Hangman, but for football teams!</h2>
      </div>
      <div className="h-full rounded-md p-2 row-span-4 flex flex-col items-center">
        <div>
          <WhiteSquaresContainer gameState={gameState} userSubmissionArray={userSubmissionArray} matcherText={team} />
        </div>
        <div id="user-input" className="mt-6 w-full flex justify-center gap-2 sm:gap-6 items-center">
          <p className="text-white100">Enter a character ➡️</p>

          <input maxLength={1} value={userInput} onChange={(event) => setUserInput(event.target.value)}
                 disabled={disableInput}
                 className="w-24 h-24 rounded-md text-5xl text-center"/>
          <button onClick={() => handleUserInputSubmission(userInput)}
                  disabled={disableInput}
                  className="px-6 py-2 rounded-md border-2 border-white100 bg-blue500 text-white100">Submit
          </button>
        </div>
        <div className="mt-6 w-full flex justify-evenly items-center gap-2 sm:gap-6">
          <input placeholder="Chance it in one..." value={userNuclearInput}
                 onChange={(event) => setUserNuclearInput(event.target.value)}
                 disabled={disableInput}
                 className="w-full px-6 py-2 rounded-md border-2 text-xl md:text-3xl lg:text-5xl text-center"/>
          <button onClick={() => handleNuclearSubmission(userNuclearInput)}
                  disabled={disableInput}
                  className="px-6 py-2 rounded-md border-2 border-white100 text-white100 bg-green400 text-xl md:text-3xl lg:text-5xl font-bold">Go!
          </button>
        </div>
        <div className="py-2">
          {
            errorMessage != '' && <p className="text-red500">{errorMessage}</p>
          }
          {
            successMessage != '' && <p className="text-green400 text-center">{successMessage}</p>
          }
        </div>
      </div>
      <div className="row-span-3">
        <p className="text-white100 text-center text-xs px-4">
          TNG uses data from the Football Web Pages API. All teams are based on the following leagues: English
          Premier League, English Championship with more to be added on in due course.
        </p>
      </div>
    </main>
  )
}
