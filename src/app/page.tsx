'use client';

import {useEffect, useState} from "react";
import {keyboardContent, tempData} from "@/tempData";
import {checkValidInput} from "@/utlities/checkValidInput";
import {checkFullWord} from "@/utlities/checkFullWord";
import {GameResult, GameState, InputTab} from "@/utlities/models";
import {WhiteSquaresContainer} from "@/components/WhiteSquaresContainer";
import {CloseIcon} from "@/components/CloseIcon";

export default function Home() {
  // premier league, c'ship, L1, L2, scottish prem, Ligue 1, Bundesliga, serie a, la liga
  // const competitionIdsArray: Array<number> = [1, 2, 3, 4, 17, 91, 92, 93, 94];
  const [team, setTeam] = useState<string>('');
  const [userInput, setUserInput] = useState<string | undefined>(undefined);
  const [userNuclearInput, setUserNuclearInput] = useState<Array<string>>([]);
  const [guessCount, setGuessCount] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [userSubmissionArray, setUserSubmissionArray] = useState<string[]>([]);
  const [gameState, setGameState] = useState<GameState>(GameState.gameStarted);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [gameOverMessage, setGameOverMessage] = useState<string>('');
  const [showRulesModal, setShowRulesModal] = useState<boolean>(false);
  const [showGameOverModal, setShowGameOverModal] = useState<boolean>(false);
  const [inputTab, setInputTab] = useState<InputTab>(InputTab.oneByOne);
  // const testingTeam = "Brighton and Hove Albion";
  const setTheTeam = (teams: string[]) => {
    const random = Math.floor(Math.random() * teams.length);
    setTeam(teams[random]);
  }


  useEffect(() => {
    setTheTeam(tempData);
    // setTeam(testingTeam)
  }, []);
  const handleGameFinished = (result: GameResult) => {
    result === GameResult.win ? setGameOverMessage("You won!") : setGameOverMessage("You lost!");
    setGameState(GameState.gameOver);
    setUserSubmissionArray(team.toLowerCase().split(""));
    setUserInput(undefined);
    // setShowGameOverModal(true)
  }
  const handleTabChange = (tab: InputTab) => {
    setUserInput('');
    setUserNuclearInput([]);
    setInputTab(tab);
  }

  const handleEnterPress = (tab: InputTab) => {
    switch (tab) {
      case InputTab.oneByOne:
        if (userInput !== undefined) {
          // do the checks with team name handleValidInput or whatever
          handleValidInput();
          setGuessCount(prevState => prevState + 1);
          return;
        }
        break;
      case InputTab.goForGlory:
        console.log("Go for glory");
        if (userNuclearInput.length > 0) {
           // call the handlenuclearsubmission function
          handleNuclearSubmission();
        }

    }
  }


  const handleUserInputSubmission = (text: string, tab: InputTab) => {
    switch (tab) {
      case InputTab.oneByOne:
        if (text === "DEL") {
          setUserInput('');
          return;
        }
        if (text === "SPACE") {
          return;
        }
        // if it's not del or enter or space then it must be a character
        else {
          setUserInput(text);
        }
        break;
      case InputTab.goForGlory:
        if (text === "DEL") {
          setUserNuclearInput(prevState => prevState.slice(0, prevState.length - 1));
          return;
        }
        if (text === "SPACE") {
          setUserNuclearInput(prevState => [...prevState, " "]);
          return;
        }
        setUserNuclearInput(prevState => [...prevState, text]);
        break;
    }
  }

  const handleValidInput = (count?: number) => {

    if (userInput !== undefined && !team.toLowerCase().includes(userInput.toLowerCase())) {
      setUserInput(undefined);
      // this is temporary, we will have the crosses at the top to signify wrong guesses
      // setErrorMessage("Character not present");
      // setInterval(() => {
      //   setErrorMessage('')
      // }, 1000);
      return;
    } else {
        userInput && userSubmissionArray.push(userInput.toLowerCase());
        setUserInput(undefined);
    }
    function extractUniqueLetters(str: string) {
      let uniqueLetters = '';
      for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && !uniqueLetters.includes(str[i])) {
          uniqueLetters += str[i];
        }
      }
      return uniqueLetters;
    }

    const teamUniqueLetters = extractUniqueLetters(team.toLowerCase());

    const tempCheck = (array: Array<string>, string: string) => {
      for (let i=0; i< array.length; i++) {
        if (!string.includes(array[i])) {
          return false;
        }
      }
      return true;
    }
    if (userSubmissionArray.length === teamUniqueLetters.length) {
      tempCheck(userSubmissionArray, teamUniqueLetters) ? handleGameFinished(GameResult.win) : handleGameFinished(GameResult.loss);
    }

  }

  const handleNuclearSubmission = () => {
    //set the game state to game finished
      setGameState(GameState.gameOver);
    // check if userNuclearInput has same number of words as team
       const array1 = userNuclearInput.join('').toLowerCase().split(' ');
       const array2 = team.toLowerCase().split(' ');
       if (array1.length !== array2.length) {
         // show an error message saying "Number of words do not match"
         return;
       }

    // check if userNuclearInput has same number of characters as team
      if (userNuclearInput.length !== team.length) {
        // show an error message saying "Number of characters do not match"
        return;
      }

    // check if there is a full match
    else {
        if (userNuclearInput.join('').toLowerCase() === team.toLowerCase()) {
          handleGameFinished(GameResult.win);
        }
        if (userNuclearInput.join('').toLowerCase() !== team.toLowerCase()) {
          handleGameFinished(GameResult.loss);
        }
        const array3 = userNuclearInput.filter(item => item !== " ");
        const array4 = array3.map(item => item.toLowerCase());
        setUserSubmissionArray(array4);
        setGameState(GameState.gameOver);
      }

  }

  return (
    <main
      className="relative w-full h-screen max-w-6xl flex flex-col justify-evenly border-2 border-gray50 rounded lg:px-6 shadow-xl bg-black300">
      <div className="flex flex-col items-center">
        <h1 className="text-white100 text-2xl sm:text-3xl sm:text-4xl">Team Name Guesser</h1>
        <p className="text-green400 text-sm font-semibold underline cursor-pointer"
           onClick={() => setShowRulesModal(true)}>Rules</p>
      </div>

      <div className="flex flex-col items-center w-full h-fit">
          <WhiteSquaresContainer gameState={gameState} userSubmissionArray={userSubmissionArray} matcherText={team} />
      </div>
      <div id="tabbed-view-for-inputs" className="flex flex-col items-center w-full gap-2 py-1">
        <div id="tabbed-navbar" className="flex w-full max-w-3xl justify-evenly">
          <div onClick={() => handleTabChange(InputTab.oneByOne)}
               className={`cursor-pointer border-gray50 w-full py-2 text-center ${inputTab === InputTab.oneByOne ? 'shadow-xl border-b-4 border-b-blue500 text-blue500 font-semibold' : 'text-white50' }`}>
            One by One
          </div>
          <div onClick={() => handleTabChange(InputTab.goForGlory)}
               className={`cursor-pointer border-gray50 w-full py-2 text-center ${inputTab === InputTab.goForGlory ? 'shadow-xl border-b-4 border-b-blue500 text-blue500 font-semibold' : 'text-white50'}`}>
            Go for glory!
          </div>
        </div>
        {
          inputTab === InputTab.oneByOne ? (
              <div id="one-by-one-input" className="flex justify-center">
                <div className="rounded-md text-5xl text-center bg-black300 border-2 border-black100 text-white100 w-16 h-12 sm:w-28 sm:h-28 flex justify-center items-center">
                  {userInput}
                </div>
              </div>
            ) :
            (
              <div id="go-for-glory-input" className="flex justify-center w-full">
                <div className="rounded-md text-5xl text-center bg-black300 border-2 border-black100 text-white100 w-full h-12 sm:h-28 flex justify-center items-center">
                  {userNuclearInput}
                </div>
              </div>
            )
        }
      </div>

      <div id="virtual-keyboard" className="w-full flex flex-col gap-1">
        {
          keyboardContent.map((row, index) =>
            <div className="flex w-full gap-1">
              {
                row.map((keyMap, index) =>
                  <p onClick={() => {
                    keyMap === "ENTER" ? handleEnterPress(inputTab) : handleUserInputSubmission(keyMap, inputTab)
                  }}
                     className="cursor-pointer m-0 w-full py-2 lg:py-4 bg-gray50 text-blue300 flex items-center justify-center hover:bg-black100">
                    {keyMap}
                  </p>
                )
              }
            </div>
          )
        }
      </div>
      {
        showRulesModal && (
          <div className="absolute w-full bg-black200 h-full px-2">
            <div className="h-full w-full max-w-6xl bg-whiteTranslucent flex flex-col items-center">
              <div
                className="h-full w-full max-w-3xl bg-black200 md:px-12 lg:px-16 md:pt-12 flex flex-col justify-start gap-2 md:gap-6">
                <div className="w-full pt-4 flex justify-between">
                  <p className="text-lg sm:text-xl lg:text-2xl text-green200">Rules</p>
                  <CloseIcon onClick={() => setShowRulesModal(false)} color="#f8f8f8" size={28}/>
                </div>
                <div className="">
                  <ul className="m-0 text-sm sm:text-lg list-none text-white100">
                    <li>
                      <p className="text-white100">Each deck of white squares represents a word in the name of a football
                        team.</p>
                    </li>
                    <li>
                      <p className="text-white100">Like hangman, you can enter 1 character and see how many occurrences
                        you have in the entire answer.</p>
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
                      <p className="text-white100">All clues based on data from the BBC.</p>
                    </li>
                    <li>
                      <p className="text-white100">All clues based on teams from the following leagues:-</p>
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
      {
        showGameOverModal && (
          <div className="absolute w-full bg-black200 h-full px-2">
            <div className="h-full w-full max-w-6xl bg-whiteTranslucent flex flex-col items-center">
              <div className="h-full w-full max-w-3xl bg-black200 md:px-12 lg:px-16 md:pt-12 flex flex-col justify-start gap-2 md:gap-6">
                <div className="w-full pt-4 flex justify-between">
                  <p className="text-lg sm:text-xl lg:text-2xl text-green200">Game Over</p>
                  <CloseIcon onClick={() => setShowGameOverModal(false)} color="#f8f8f8" size={28}/>
                </div>
                <p>{gameOverMessage}</p>

              </div>
            </div>
          </div>
        )
      }
    </main>
  )
}
