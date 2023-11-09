'use client';

import React, {useEffect, useState} from "react";
import {extendedKeyboardContent, tempData} from "@/tempData";
import {GameResult, GameState, InputTab} from "@/utlities/models";
import {WhiteSquaresContainer} from "@/components/WhiteSquaresContainer";
import {CloseIcon} from "@/components/CloseIcon";
import {FootballIcon} from "@/icons/FootballIcon";
import {useClientDimensions} from "@/utlities/clientDimensions";
import {BackspaceIcon} from "@/icons/BackspaceIcon";
import {ReturnIcon} from "@/icons/ReturnIcon";
import {Navbar} from "@/components/Navbar";
import {RulesModal} from "@/components/RulesModal";

export default function Home() {
  useClientDimensions();

  const [team, setTeam] = useState<string>('');
  const [userInput, setUserInput] = useState<string | undefined>(undefined);
  const [userNuclearInput, setUserNuclearInput] = useState<Array<string>>([]);
  const [wrongGuessCount, setWrongGuessCount] = useState<number>(0);
  const [userSubmissionArray, setUserSubmissionArray] = useState<string[]>([]);
  const [gameState, setGameState] = useState<GameState>(GameState.gameStarted);
  const [gameResult, setGameResult] = useState<GameResult>(GameResult.default);
  const [showRulesModal, setShowRulesModal] = useState<boolean>(false);
  const [inputTab, setInputTab] = useState<InputTab>(InputTab.oneByOne);
  const [disabledKeysForOneByOne, setDisabledKeysForOneByOne] = useState<string[]>([]);
  const [buttonEffect, setButtonEffect] = useState<boolean>(false);
  // const testingTeam = "Borussia Monchengladbach";
  const setTheTeam = () => {
    setGameState(GameState.gameStarted);
    setUserSubmissionArray([]);
    setInputTab(InputTab.oneByOne);
    setDisabledKeysForOneByOne([]);
    setUserNuclearInput([]);
    setUserInput(undefined);
    setShowRulesModal(false)
    const random = Math.floor(Math.random() * tempData.length);
    setTeam(tempData[random]);
    setGameResult(GameResult.default);
    setWrongGuessCount(0);
  }

  const wrongGuessArray = new Array(7).fill(<></>)

  useEffect(() => {
    setTheTeam();
    // setTeam(testingTeam)
  }, []);
  const handleGameFinished = () => {
    setGameState(GameState.gameOver);
    setUserSubmissionArray(team.toLowerCase().split(""));
    setUserInput(undefined);
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
          setDisabledKeysForOneByOne(prevState => [...prevState, userInput]);
          return;
        }
        break;
      case InputTab.goForGlory:
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
      if (wrongGuessCount === 6) {
        setWrongGuessCount(prevState => prevState + 1);
        setGameState(GameState.gameOver);
        setGameResult(GameResult.loss);
        // handleGameFinished();
        const len = team.split('').filter(item => item !== ' ').length;
        const newArray = new Array(len - userSubmissionArray.length).fill(' ');
        setUserInput(undefined);

        setUserSubmissionArray(prevState => {
          return [...prevState, ...newArray]
        });
        return;
      } else if (wrongGuessCount < 6) {
        setWrongGuessCount(prevState => prevState + 1);
      }
      setUserInput(undefined);
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
      for (let i = 0; i < array.length; i++) {
        if (!string.includes(array[i])) {
          return false;
        }
      }
      return true;
    }
    if (userSubmissionArray.length === teamUniqueLetters.length) {
      if (tempCheck(userSubmissionArray, teamUniqueLetters)) {
        setGameResult(GameResult.win);
        handleGameFinished();
      } else {
        setGameResult(GameResult.loss);
        handleGameFinished();
      }
    }
  }

  const handleNuclearSubmission = () => {
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
      setGameState(GameState.gameOver);

      if (userNuclearInput.join('').toLowerCase() === team.toLowerCase()) {
        setGameResult(GameResult.win)
        handleGameFinished();
      }
      if (userNuclearInput.join('').toLowerCase() !== team.toLowerCase()) {
        setGameResult(GameResult.loss)
        handleGameFinished();
      }
      const array3 = userNuclearInput.filter(item => item !== " ");
      const array4 = array3.map(item => item.toLowerCase());
      setUserSubmissionArray(array4);
      setGameState(GameState.gameOver);
    }

  }

  return (
    <main
      className="relative w-full h-screen justify-between py-2 md:py-6 max-w-6xl flex flex-col border-2 border-gray50 rounded lg:px-6 shadow-xl bg-black300">
      <Navbar clickRulesIcon={() => setShowRulesModal(true)} clickRefreshIcon={() => setTheTeam()} />

      <div className="flex flex-col items-center w-full h-fit">
        <WhiteSquaresContainer gameResult={gameResult} gameState={gameState} userSubmissionArray={userSubmissionArray}
                               matcherText={team}/>
      </div>
      <div id="tabbed-view-for-inputs" className="flex flex-col items-center w-full gap-2 md:gap-6 py-1">
        <div id="tabbed-navbar" className="flex w-full max-w-3xl justify-evenly">
          <div onClick={() => handleTabChange(InputTab.oneByOne)}
               className={`cursor-pointer border-gray50 w-full py-2 text-center ${inputTab === InputTab.oneByOne ? 'shadow-xl border-b-4 border-b-blue500 text-blue500 font-semibold' : 'text-white50'}`}>
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
                <div
                  className="rounded-md text-3xl text-center bg-black300 border-2 border-black100 text-white100 w-16 h-12 sm:w-20 sm:h-18 flex justify-center items-center">
                  {userInput}
                </div>
              </div>
            ) :
            (
              <div id="go-for-glory-input" className="flex justify-center w-full">
                <div
                  className="rounded-md text-sm sm:text-lg md:text-xl lg:text-3xl text-center bg-black300 border-2 border-black100 text-white100 w-full h-12 sm:h-18 flex justify-center items-center">
                  {userNuclearInput}
                </div>
              </div>
            )
        }

      </div>

      <div className="flex gap-4 w-full justify-center">
        {
          wrongGuessArray.map((item, index) =>
            <div key={index} className={`${index + 1 <= wrongGuessCount ? 'animate-on-wrong-guess' : null}`}>
              <FootballIcon size={20} color={index + 1 <= wrongGuessCount ? '#ec0202' : '#3d3d3d'}/>
            </div>)
        }
      </div>

      <div id="virtual-keyboard" className="relative w-full flex flex-col gap-1 content-center">
        {
          gameState === GameState.gameOver && (
            <div className="absolute w-full h-full bg-black300 opacity-90">
              <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center game-over-message-fade-in">
                <h1 className="text-2xl md:text-5xl text-white100" >{
                  gameResult === GameResult.win ? 'WINNER!' : 'BAD LUCK!'
                }</h1>
              </div>
            </div>
          )
        }
        {
          extendedKeyboardContent.map((row, index) =>
            <div key={index} className={`w-full gap-1 ${index === 4 ? 'grid grid-cols-12' : 'flex'}`}>
              {
                row.map((keyMap, index) =>
                  <button
                    key={keyMap.id}
                    onClick={() => {
                      setButtonEffect(true);
                      keyMap.key === "ENTER" ? handleEnterPress(inputTab) : handleUserInputSubmission(keyMap.key, inputTab);
                    }}
                    onAnimationEnd={() => setButtonEffect(false)}
                    className={`
                    ${keyMap.row < 4 && 'focus:animate-ping-once '} 
                    ${keyMap.row === 4 && buttonEffect && 'focus:animate-button-pressed '}
                    ${keyMap.key === "DEL" || keyMap.key === "ENTER" ? 'col-span-3' : keyMap.key === "SPACE" ? 'col-span-6' : null}  
                    ${inputTab === InputTab.oneByOne && disabledKeysForOneByOne.includes(keyMap.key)
                      ? 'bg-black300 text-gray50'
                      : 'bg-gray50 text-blue300 hover:bg-black100'}
                      cursor-pointer m-0 w-full py-2 lg:py-4 flex items-center justify-center
                      `}
                    disabled={inputTab === InputTab.oneByOne ? disabledKeysForOneByOne.includes(keyMap.key) : false}
                  >
                    {
                      keyMap.key === "DEL" ? (<BackspaceIcon size={24} color="#54b4ff"/>)
                        :
                        keyMap.key === "ENTER" ? (<ReturnIcon size={24} color="#54b4ff"/>)
                          :
                          keyMap.key === "SPACE" ? ' '
                            : keyMap.key
                    }
                  </button>
                )
              }
            </div>
          )
        }
      </div>
      {
        showRulesModal && (
          <div className="absolute w-full h-screen top-0 left-0 bg-black300">
            <RulesModal onClickClose={() => setShowRulesModal(false)} />
          </div>
        )
      }
    </main>
  )
}
