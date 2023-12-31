import {Carousel} from "react-responsive-carousel";
import {RulesModalSlide} from "@/components/RulesModalSlide";
import {CloseIcon} from "@/components/CloseIcon";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {WhiteSquaresContainer} from "@/components/WhiteSquaresContainer";
import {GameResult, GameState, InputTab} from "@/utlities/models";
import {InputSection} from "@/components/InputSection";
import {Keyboard} from "@/components/Keyboard";
import {FootballIcon} from "@/icons/FootballIcon";
import React from "react";

interface RulesModalProps {
  onClickClose: () => void;
}

export const RulesModal = ({onClickClose}: RulesModalProps) => {
  const wrongGuessArray = new Array(7).fill(<></>);
  return (
    <div className="absolute z-30 h-screen w-full py-2 lg:py-6 text-white100 flex flex-col bg-black300">
      <div className="flex justify-between w-full my-2 px-2">
        <h1 className="text-white100 font-display">Rules</h1>
        <CloseIcon onClick={onClickClose} color="#f8f8f8" size={28}/>
      </div>
      <div className="text-xs">
        <Carousel autoPlay={false}>
          <RulesModalSlide index={1}>
            <p className="leading-6 text-left"><span className="font-display">?ERFECT</span> is a really simple game around football team names
              (and very
              similar to Hangman). You can enter characters one by one and see how many occurrences there are in
              the answer.
            </p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">
              <WhiteSquaresContainer
                matcherText="Manchester United"
                userSubmissionArray={["e"]}
                gameState={GameState.gameStarted}
                gameResult={GameResult.default}
                nuclearInputFullString={"Manchester United"}
                inputTab={InputTab.oneByOne}
              />
              <InputSection
                inputTab={InputTab.oneByOne}
                userInput="e"
                tempNuclearInput={'Manchester United'}
                onClickTab={() => {}}
                gameState={GameState.gameStarted}
              />
            </div>
            <p className="leading-6 text-left">You can keep going till you get the full name. If the character isn't in
              the name, it won't show up in the answer board.
            </p>
          </RulesModalSlide>
          <RulesModalSlide index={2}>
            <p className="leading-6 text-left">Or you can chance it in one go. Do you dare?</p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">
              <WhiteSquaresContainer
                matcherText="Arsenal"
                userSubmissionArray={["f", "r", "s", "e", "n", "l"]}
                gameState={GameState.gameOver}
                gameResult={GameResult.loss}
                inputTab={InputTab.goForGlory}
                nuclearInputFullString={"FRSENAL"}
              />
              <InputSection inputTab={InputTab.goForGlory}
                            userInput="e"
                            tempNuclearInput={"FRSENAL"}
                            onClickTab={() => {}}
                            gameState={GameState.gameStarted}
              />
            </div>
            <p className="leading-6 text-left">The downside? If you get it wrong, you lose. No re-dos!</p>
          </RulesModalSlide>
          <RulesModalSlide index={3}>
            <p className="leading-6 text-left"><p className="leading-6 text-left">In <span className="text-blue300 font-bold">One by One</span> mode you have 7 chances.</p></p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">
              <div className="flex gap-4 w-full justify-center">
                {
                  wrongGuessArray.map((item, index) =>
                    <div key={index} className={`${index + 1 <= 6 ? 'animate-on-wrong-guess' : null}`}>
                      <FootballIcon size={20} color={index + 1 <= 6 ? '#ec0202' : '#3d3d3d'}/>
                    </div>)
                }
              </div>
            </div>
            <p className="leading-6 text-left">Else it's off for an early bath!</p>
          </RulesModalSlide>
          <RulesModalSlide index={5}>
            <p className="leading-6 text-left">Numbers/Dashes/Ampersands are very much possible in a team name.</p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">
              <WhiteSquaresContainer
                matcherText="Vfl Bochum 1848"
                nuclearInputFullString={"Vfl Bochum 1848"}
                inputTab={InputTab.goForGlory}
                userSubmissionArray={['v', 'f', 'l', 'b', 'o', 'c', 'h', 'u', 'm', '1', '8', '4', '8']}
                gameState={GameState.gameOver}
                gameResult={GameResult.win}
              />
              <InputSection
                inputTab={InputTab.goForGlory}
                userInput="e"
                tempNuclearInput={"Vfl Bochum 1848"}
                onClickTab={() => {}}
                gameState={GameState.gameStarted}
              />
            </div>
            <p className="leading-6 text-left">Other special characters, not really!</p>
          </RulesModalSlide>
          <RulesModalSlide index={6}>
            <p className="leading-6 text-left">In <span className="text-blue300 font-bold">One by One</span> mode once you
              submit a character, it is no longer available on the keyboard.</p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">
              <WhiteSquaresContainer
                matcherText="Chelsea"
                userSubmissionArray={['e', 'l', 's']}
                nuclearInputFullString={'Hello'}
                inputTab={InputTab.oneByOne}
                gameState={GameState.gameStarted}
                gameResult={GameResult.default}
              />
              <InputSection
                inputTab={InputTab.oneByOne} userInput=""
                tempNuclearInput={''}
                onClickTab={() => {}}
                gameState={GameState.gameStarted}
              />
              <Keyboard
                gameResultMessage={""}
                inputTab={InputTab.oneByOne}
                buttonEffect={true}
                buttonEffectCallback={() => {}}
                onEnterClick={() => {}}
                userInputSubmissionCallback={() => {}}
                disabledKeysArray={["E", "L", "S"]}
                gameState={GameState.gameStarted}
                gameResult={GameResult.default}
                onClickNewGameButton={() => {}}
                onClickViewScoreButton={() => {}}
              />
            </div>
          </RulesModalSlide>
          <RulesModalSlide index={7}>
            <p className="leading-6 text-left">In <span className="text-blue300 font-bold">Go For Glory</span> mode check the following before pressing enter:-</p>
            <ul className="text-left m-0 p-0 leading-6">
              <li>- Number of words in the team name</li>
              <li>- Number of characters in each word of the team name</li>
              <li>- Number of characters in the entire team name</li>
            </ul>
            <p className="leading-6">If the correct answer is meant to be: AFC Wimbledon</p>
            <p className="leading-6">Then the following entry</p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">

              <div id="go-for-glory-input" className="flex justify-center w-full">
                <div
                  className="rounded-md text-sm sm:text-lg md:text-xl lg:text-3xl text-center bg-black300 border-2 border-black100 text-white100 w-full h-12 sm:h-18 flex justify-center items-center">
                  AFCE WIMBLEDOON
                </div>
              </div>
            </div>
            <p className="leading-6">...would be invalid!</p>
          </RulesModalSlide>

          <RulesModalSlide index={8}>
            <p className="text-white100">Scores are calculated as follows:-</p>
            <ul className="text-left m-0 p-0 flex flex-col gap-6">
              <li>Time: 60 minus elapsed time</li>
              <li>Lives: 7 minus number of lives lost</li>
              <li>Glory: 50 minus percentage of characters revealed</li>
            </ul>
          </RulesModalSlide>

          <RulesModalSlide index={9}>
            <p className="leading-6 text-left">All clues based on teams from the following leagues.</p>
            <div>
              <ul className="list-disc text-left text-sm overflow-y-auto">
                <li>Premier League</li>
                <li>Championship</li>
                <li>League One</li>
                <li>League Two</li>
                <li>National League</li>
                <li>National League North</li>
                <li>National League South</li>
                <li>Northern Premier League</li>
                <li>Scottish Premiership</li>
                <li>French Ligue 1</li>
                <li>German Bundesliga</li>
                <li>Italian Serie A</li>
                <li>Spanish La Liga</li>
                <li>American MLS</li>
                <li>Australian A-League</li>
              </ul>
            </div>
            <p className="leading-6 text-left">More being added in future. All data based on the BBC or official club/league websites.</p>
          </RulesModalSlide>
        </Carousel>
      </div>
    </div>
  )
};
