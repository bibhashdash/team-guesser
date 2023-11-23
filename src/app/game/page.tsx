'use client';

import React, {useEffect, useState} from "react";
import {tempData} from "@/tempData";
import {GameResult, GameState, InputTab, ScoreBreakdown} from "@/utlities/models";
import {WhiteSquaresContainer} from "@/components/WhiteSquaresContainer";
import {useClientDimensions} from "@/utlities/clientDimensions";
import {Navbar} from "@/components/Navbar";
import {RulesModal} from "@/components/RulesModal";
import {InputSection} from "@/components/InputSection";
import {Keyboard} from "@/components/Keyboard";
import {CreditsModal} from "@/components/CreditsModal";
import {GamePageInitialReminder} from "@/components/GamePageInitialReminder";
import {WrongGuessMarkers} from "@/components/WrongGuessMarkers";
import {useStopwatch} from "react-timer-hook";
import {ScoreModal} from "@/components/ScoreModal";
import {gfgBonusCalc} from "@/utlities/gfgBonusCalc";
import {LandscapeHandler} from "@/components/LandscapeHandler";
import {useClientOrientation} from "@/utlities/clientOrientation";


export default function Game() {
  useClientDimensions();
  const defaultScore: ScoreBreakdown = {
    timeScore: 0,
    livesBonus: 0,
    gloryBonus: 0
  }
  const [team, setTeam] = useState<string>('');
  const [userInput, setUserInput] = useState<string | undefined>(undefined);
  const [tempNuclearInput, setTempNuclearInput] = useState<string>('');
  const [nuclearSubmissionFullString, setNuclearSubmissionFullString] = useState<string>('');
  const [wrongGuessCount, setWrongGuessCount] = useState<number>(0);
  const [userSubmissionArray, setUserSubmissionArray] = useState<string[]>([]);
  const [gameState, setGameState] = useState<GameState>(GameState.gameStarted);
  const [gameResult, setGameResult] = useState<GameResult>(GameResult.default);
  const [showRulesModal, setShowRulesModal] = useState<boolean>(false);
  const [inputTab, setInputTab] = useState<InputTab>(InputTab.oneByOne);
  const [disabledKeysForOneByOne, setDisabledKeysForOneByOne] = useState<string[]>([]);
  const [buttonEffect, setButtonEffect] = useState<boolean>(false);
  const [wrongAnswerInputEffect, setWrongAnswerInputEffect] = useState<boolean>(false);
  const [showCreditsModal, setShowCreditsModal] = useState<boolean>(false);
  const [showScoreModal, setShowScoreModal] = useState<boolean>(false);
  const [showInitialReminder, setShowInitialReminder] = useState<boolean>(false);
  const [gameResultMessage, setGameResultMessage] = useState<string>('');
  const [scoreBreakdown, setScoreBreakdown] = useState<ScoreBreakdown>(defaultScore)
  // const testingTeam = "Borussia Monchengladbach";
  const {seconds, minutes, reset, pause} = useStopwatch()
  const [showLandscapeModal, setShowLandscapeModal] = useState<boolean>(false);
  const {deviceOrientation} = useClientOrientation();

  useEffect(() => {
    deviceOrientation === 'landscape' ? setShowLandscapeModal(true) : setShowLandscapeModal(false);
  }, [deviceOrientation])

  useEffect(() => {
   setShowInitialReminder(true);
   setTheTeam();

  }, [])

  useEffect(() => {
    if (minutes === 1) {
      setGameResultMessage("Timed out!");
      setGameResult(GameResult.loss);
      const len = team.split('').filter(item => item !== ' ').length;
      const newArray = new Array(len - userSubmissionArray.length).fill(' ');
      setUserInput(undefined);
      setUserSubmissionArray(prevState => {
        return [...prevState, ...newArray]
      });

      setGameState(GameState.gameOver);
      setUserInput(undefined);
      pause();
    }
  }, [minutes])

  const setTheTeam = () => {
    setGameState(GameState.gameStarted);
    setUserSubmissionArray([]);
    setInputTab(InputTab.oneByOne);
    setDisabledKeysForOneByOne([]);
    setUserInput(undefined);
    setShowRulesModal(false);
    setTempNuclearInput('');
    setNuclearSubmissionFullString('');
    const random = Math.floor(Math.random() * tempData.length);
    setTeam(tempData[random]);
    setGameResult(GameResult.default);
    setWrongGuessCount(0);
    setGameResultMessage('');
    setScoreBreakdown(defaultScore);
    reset();
  }

  const handleGameFinished = () => {
    setGameState(GameState.gameOver);
    setUserSubmissionArray(team.toLowerCase().split(""));
    setUserInput(undefined);
    pause();
  }
  const handleTabChange = (tab: InputTab) => {
    setUserInput('');
    setTempNuclearInput('');
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
        if (tempNuclearInput.length > 0) {
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
          setTempNuclearInput(prevState => prevState.slice(0, prevState.length - 1));
          return;
        }
        if (text === "SPACE") {
          setTempNuclearInput(prevState => prevState + " ");
          return;
        }
        setTempNuclearInput(prevState => prevState + text)
        break;
    }
  }

  const handleValidInput = () => {

    if (userInput !== undefined && !team.toLowerCase().includes(userInput.toLowerCase())) {
      if (wrongGuessCount === 6) {
        setGameResultMessage("Yer off!")

        setWrongGuessCount(prevState => prevState + 1);
        setGameState(GameState.gameOver);
        setGameResult(GameResult.loss);

        const len = team.split('').filter(item => item !== ' ').length;
        const newArray = new Array(len - userSubmissionArray.length).fill(' ');
        setUserInput(undefined);
        pause();
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
        setGameResultMessage("WINNER!")
        setScoreBreakdown(prevState => (
          {
            ...prevState,
            timeScore: 60 - seconds,
            livesBonus: 7 - wrongGuessCount
          }))
        handleGameFinished();
      } else {
        setGameResult(GameResult.loss);
        setGameResultMessage("Wrong guess!");
        setScoreBreakdown(defaultScore)
        handleGameFinished();
      }
    }
  }

  const handleNuclearSubmission = () => {

    // check if userNuclearInput has same number of words as team
    const array1 = tempNuclearInput.toLowerCase().split(' ');
    const array2 = team.toLowerCase().split(' ');
    if (array1.length !== array2.length) {

      setWrongAnswerInputEffect(true);
      return;
    }
    else if (array1.length === array2.length) {
      for (let i=0; i<array1.length ; i++) {
        if (array1[i].length !== array2[i].length) {
          setWrongAnswerInputEffect(true);
          return;
        }
      }
    }

    // check if userNuclearInput has same number of characters as team
    if (tempNuclearInput.length !== team.length) {
      setWrongAnswerInputEffect(true);

      return;
    }

    // check if team name and user nuclear input have the same number of words and each word has the same number of characters


    // check if there is a full match
    else {

      setGameState(GameState.gameOver);
      if (tempNuclearInput.toLowerCase() === team.toLowerCase()) {
        setGameResult(GameResult.win);
        setGameResultMessage("WINNER!");
        setScoreBreakdown(prevState => (
          {
            ...prevState,
            timeScore: 60 - seconds,
            livesBonus: 7 - wrongGuessCount,
            gloryBonus: gfgBonusCalc(userSubmissionArray, team)
          }))
        handleGameFinished();
      }
      if (tempNuclearInput.toLowerCase() !== team.toLowerCase()) {
        setGameResult(GameResult.loss);
        setGameResultMessage("Wrong guess!");
        setScoreBreakdown(defaultScore)
        handleGameFinished();
      }

     setNuclearSubmissionFullString(tempNuclearInput);
      setGameState(GameState.gameOver);
    }
  }

  return (
    <main
      className="relative w-full h-screen justify-between md:py-6 max-w-6xl flex flex-col border-2 border-gray50 rounded lg:px-6 shadow-xl bg-black300">
      <Navbar
        gameState={gameState}
        elapsedMinutes={minutes}
        elapsedSeconds={seconds}
        clickRulesIcon={() => setShowRulesModal(true)}
        clickRefreshIcon={() => setTheTeam()}
        clickCreditsIcon={() => setShowCreditsModal(true)}
      />

      <div
        onAnimationEnd={() => setWrongAnswerInputEffect(false)}
        className={`flex flex-col items-center w-full h-fit ${wrongAnswerInputEffect && 'wrong-answer-input'}`}
      >
        <WhiteSquaresContainer
          gameResult={gameResult}
          gameState={gameState}
          userSubmissionArray={userSubmissionArray}
          matcherText={team}
          inputTab={inputTab}
          nuclearInputFullString={nuclearSubmissionFullString}
        />
      </div>
      <InputSection
        inputTab={inputTab}
        userInput={userInput ?? ''}
        onClickTab={handleTabChange}
        tempNuclearInput={tempNuclearInput}
        gameState={gameState}
      />
      <WrongGuessMarkers wrongGuessCount={wrongGuessCount} />

      <Keyboard
        gameResultMessage={gameResultMessage}
        inputTab={inputTab}
        buttonEffect={buttonEffect}
        buttonEffectCallback={setButtonEffect}
        onEnterClick={handleEnterPress}
        userInputSubmissionCallback={handleUserInputSubmission}
        disabledKeysArray={disabledKeysForOneByOne}
        gameState={gameState}
        gameResult={gameResult}
        onClickNewGameButton={() => setTheTeam()}
        onClickViewScoreButton={() => setShowScoreModal(true)}
      />
      {
        showRulesModal && (
          <div className="absolute w-full h-screen top-0 left-0 bg-black300">
            <RulesModal onClickClose={() => setShowRulesModal(false)} />
          </div>
        )
      }
      {
        showCreditsModal && (
          <div className="absolute w-full h-screen top-0 left-0 bg-black300 z-30">
            <CreditsModal onClickClose={() => setShowCreditsModal(false)} />
          </div>
        )
      }
      {
        showInitialReminder && (
          <div className="absolute w-full top-0 left-0 backdrop-blur h-full bg-backdropFilter flex justify-center items-center py-2 px-2 sm:px-4 md:py-20 z-50">
            <GamePageInitialReminder onClickClose={() => {setShowInitialReminder(false); setTheTeam() }} />
          </div>
        )
      }
      {
        showScoreModal && (
         <div className="absolute w-full top-0 left-0 backdrop-blur h-full bg-backdropFilter flex justify-center items-center py-2 px-2 sm:px-4 md:py-20">
           <ScoreModal scoreBreakdown={scoreBreakdown} onClickClose={() => setShowScoreModal(false)} />
         </div>
        )
      }
      {
        showLandscapeModal && (
          <div className="w-full max-w-3xl absolute w-full h-screen top-0 bg-black300 z-50">
            <LandscapeHandler />
          </div>
        )
      }
    </main>
  )
}
