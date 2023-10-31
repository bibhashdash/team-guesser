'use client';

import {useEffect, useState} from "react";
import {tempData} from "@/tempData";
import {checkValidInput} from "@/utlities/checkValidInput";
import {checkFullWord} from "@/utlities/checkFullWord";
import {GameState} from "@/utlities/models";
import {WhiteSquaresContainer} from "@/components/WhiteSquaresContainer";
import {CloseIcon} from "@/components/CloseIcon";

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
  const [showModal, setShowModal] = useState<boolean>(false);

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
    } else {
      if (checkFullWord(userSubmissionArray.join(), team)) {
        setUserSubmissionArray(team.toLowerCase().split(""));
        setUserInput('');
        setDisableInput(true);
        setSuccessMessage("You won!");
        setGameState(GameState.gameOver);
      } else {
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
      setUserInput('');
      setInterval(() => {
        setErrorMessage('')
      }, 2000);
      return;
    }

    if (text.length !== team.length) {
      setErrorMessage("Error! Number of characters do not match");
      setUserInput('');
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
    } else {
      setUserSubmissionArray(text.toLowerCase().split(""));
      setErrorMessage("Wrong guess, game over!");
      setDisableInput(true);
      setGameState(GameState.gameOver);
    }
  }

  return (
    <main
      className="relative min-h-screen w-full max-w-6xl grid grid-rows-12 pt-2 items-center justify-center border-2 border-gray50 rounded lg:px-6 shadow-xl bg-black300">
      <div className="row-span-3 px-2 flex flex-col items-center">
        <h1 className="text-white100 text-2xl sm:text-3xl sm:text-4xl">Team Name Guesser</h1>
        <h2 className="text-white100 text-sm">Like Hangman, but for football teams!</h2>
        <p className="text-green400 text-sm font-semibold underline" onClick={() => setShowModal(true)}>Rules</p>
      </div>
      <div className="h-full rounded-md p-2 row-span-4 flex flex-col items-center">
        <div className="flex flex-col">
          <WhiteSquaresContainer gameState={gameState} userSubmissionArray={userSubmissionArray} matcherText={team}/>
        </div>
        <div id="user-input" className="mt-6 w-full flex justify-center gap-2 sm:gap-6 items-center">
          <p className="text-white100">Enter a character ➡️</p>

          <input maxLength={1} value={userInput} onChange={(event) => setUserInput(event.target.value)}
                 disabled={disableInput}
                 className="w-24 h-24 rounded-md text-5xl text-center"/>
          <button onClick={() => handleUserInputSubmission(userInput)}
                  disabled={disableInput}
                  className={`px-6 py-2 rounded-md border-2 border-white100 ${disableInput ? 'bg-black300 text-black100 cursor-not-allowed' : 'bg-blue500 text-white100'}`}>
            Submit
          </button>
        </div>
        <div className="mt-6 w-full flex justify-evenly items-center gap-2 sm:gap-6">
          <input placeholder="Chance it in one..." value={userNuclearInput}
                 onChange={(event) => setUserNuclearInput(event.target.value)}
                 disabled={disableInput}
                 className="w-full px-6 py-2 rounded-md border-2 text-lg sm:text-xl md:text-3xl lg:text-5xl text-center"/>
          <button onClick={() => handleNuclearSubmission(userNuclearInput)}
                  disabled={disableInput}
                  className={`px-6 py-2 rounded-md border-2 border-white100 text-xl md:text-3xl lg:text-5xl font-bold ${disableInput ? 'bg-black300 text-black100 cursor-not-allowed' : 'bg-green400 text-white100'}`}>
            Go!
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
          All teams are based on the following leagues: English
          Premier League, English Championship, English League One, English League Two, Scottish Premiership, French
          Ligue 1, German Bundesliga, Italian Serie A, and Spanish La Liga.
        </p>
        <p className="text-white100 text-center text-xs px-4">
          All team names are based on data from the BBC.
        </p>
      </div>
      {
        showModal && (
          <div className="absolute min-h-screen w-full bg-black200 h-full">
            <div className="h-full w-full max-w-6xl bg-whiteTranslucent flex flex-col items-center">
              <div className="h-full w-full max-w-3xl bg-black200 px-6 md:px-12 lg:px-16 md:pt-12 flex flex-col justify-start gap-2 md:gap-6">
                <div className="w-full pt-4 px-2 flex justify-between">
                  <p className="text-lg sm:text-xl lg:text-2xl text-green200">Rules</p>
                  <CloseIcon onClick={() => setShowModal(false)} color="#f8f8f8" size={28}/>
                </div>
                <div className="">
                  <ul className="m-0 text-sm sm:text-lg list-disc text-white100">
                    <li>
                      <p className="text-white100">Each deck of white squares represents a word in the name of a football team.</p>
                    </li>
                    <li>
                      <p className="text-white100">Like hangman, you can enter 1 character and see how many you occurrences you have in the entire answer.</p>
                    </li>
                    <li>
                      <p className="text-white100">Or you can chance it in one attempt! Do you dare?</p>
                    </li>
                    <li>
                      <p className="text-white100">If you chance it in one and get it wrong, you lose!</p>
                    </li>
                    <li>
                      <p className="text-white100">Numbers/Digits are very much possible in a team name.</p>
                    </li>
                    <li>
                      <p className="text-white100">Special characters not so much!</p>
                    </li>
                    <li>
                      <p className="text-white100">All clues are based on teams from the following leagues:-</p>
                      <ul className="text-white100">
                        <li><p>- English Premier League</p></li>
                        <li><p>- English Championship</p></li>
                        <li><p>- English League One</p></li>
                        <li><p>- English League Two</p></li>
                        <li><p>- Scottish Premiership</p></li>
                        <li><p>- French Ligue 1</p></li>
                        <li><p>- German Bundesliga</p></li>
                        <li><p>- Italian Serie A</p></li>
                        <li><p>- Spanish La Liga</p></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </main>
  )
}
