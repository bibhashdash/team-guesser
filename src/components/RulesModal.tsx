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
    <div className="h-screen w-full py-2 lg:py-6 text-white100 flex flex-col">
      <div className="flex justify-between w-full my-2 px-2">
        <h1 className="text-white100">Rules</h1>
        <CloseIcon onClick={onClickClose} color="#f8f8f8" size={28}/>
      </div>
      <div className="text-xs">
        <Carousel autoPlay={false}>
          <RulesModalSlide index={1}>
            <p className="leading-6 text-left"><span className="font-display">?ERFECT</span> is a really simple game around football team names
              (and very
              similar to Hangman). You can enter characters one by one and see how many occurrences there are in
              the answer.</p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">
              <WhiteSquaresContainer matcherText="Manchester United" userSubmissionArray={["e"]}
                                     gameState={GameState.gameStarted} gameResult={GameResult.default}/>
              <InputSection inputTab={InputTab.oneByOne} userInput="e" userNuclearInput={[]} onClickTab={() => {
              }}/>
            </div>
            <p className="leading-6 text-left">You can keep going till you get the full name. If the character isn't in
              the name, it won't show up in the answer board.</p>
          </RulesModalSlide>
          <RulesModalSlide index={2}>
            <p className="leading-6 text-left">Or you can chance it in one go. Do you dare?</p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">
              <WhiteSquaresContainer matcherText="Arsenal" userSubmissionArray={["f", "r", "s", "e", "n", "l"]}
                                     gameState={GameState.gameOver} gameResult={GameResult.loss}/>
              <InputSection inputTab={InputTab.goForGlory} userInput="e"
                            userNuclearInput={["f", "r", "s", "e", "n", "a", "l"]} onClickTab={() => {
              }}/>
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
          <RulesModalSlide index={4}>
            <p className="leading-6 text-left">Numbers/Dashes/Ampersands are very much possible in a team name.</p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">
              <WhiteSquaresContainer matcherText="Vfl Bochum 1848"
                                     userSubmissionArray={['v', 'f', 'l', 'b', 'o', 'c', 'h', 'u', 'm', '1', '8', '4', '8']}
                                     gameState={GameState.gameOver} gameResult={GameResult.win}/>
              <InputSection inputTab={InputTab.goForGlory} userInput="e"
                            userNuclearInput={['V', 'f', 'l', ' ', 'B', 'o', 'c', 'h', 'u', 'm', ' ', '1', '8', '4', '8']}
                            onClickTab={() => {
                            }}/>
            </div>
            <p className="leading-6 text-left">Other special characters, not really!</p>
          </RulesModalSlide>
          <RulesModalSlide index={5}>
            <p className="leading-6 text-left">In <span className="text-blue300 font-bold">One by One</span> mode once you
              submit a character, it is no longer available on the keyboard.</p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">
              <WhiteSquaresContainer matcherText="Chelsea"
                                     userSubmissionArray={['e', 'l', 's']}
                                     gameState={GameState.gameStarted} gameResult={GameResult.default}/>
              <InputSection inputTab={InputTab.oneByOne} userInput=""
                            userNuclearInput={[]}
                            onClickTab={() => {
                            }}/>
              <Keyboard
                inputTab={InputTab.oneByOne}
                buttonEffect={true}
                buttonEffectCallback={() => {}}
                onEnterClick={() => {}}
                userInputSubmissionCallback={() => {}}
                disabledKeysArray={["E", "L", "S"]}
                gameState={GameState.gameStarted}
                gameResult={GameResult.default}
                onClickNewGameButton={() => {}}
              />
            </div>
          </RulesModalSlide>
          <RulesModalSlide index={6}>
            <p className="leading-4 text-left">In <span className="text-blue300 font-bold">Go For Glory</span> mode you must get the following correct before being considered for a victory check:-</p>
            <ul className="text-left m-0 p-0">
              <li>- Number of words in the team name</li>
              <li>- Number of characters in each word of the team name</li>
              <li>- Number of characters in the entire team name</li>
            </ul>
            <p>So for example, if the correct answer is meant to be: AFC Wimbledon</p>
            <p>Then the following entry</p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">

              <InputSection inputTab={InputTab.goForGlory} userInput=""
                            userNuclearInput={["A", "F", "C", "E", " ", "W", "I", "M", "B", "L", "E", "D", "O", "O", "N"]}
                            onClickTab={() => {
                            }}/>
            </div>
            <p>...would be invalid! Make sure you check the white squares to see how many characters and words you need.</p>
          </RulesModalSlide>

          <RulesModalSlide index={7}>
            <p className="leading-6 text-left">All clues based on teams from the following leagues.</p>
            <div>
              <ul className="list-disc text-left text-lg">
                <li className="">Premier League</li>
                <li className="">Championship</li>
                <li className="">League One</li>
                <li className="">League Two</li>
                <li className="">National League</li>
                <li className="">Scottish Premiership</li>
                <li className="">French Ligue 1</li>
                <li className="">German Bundesliga</li>
                <li className="">Italian Serie A</li>
                <li className="">Spanish La Liga</li>
                <li className="">American MLS</li>
              </ul>
            </div>
            <p className="leading-6 text-left">More being added in future. All data based on the BBC or official club/league websites.</p>
          </RulesModalSlide>
        </Carousel>
      </div>
    </div>
  )
};
