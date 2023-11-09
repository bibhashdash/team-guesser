import {Carousel} from "react-responsive-carousel";
import {RulesModalSlide} from "@/components/RulesModalSlide";
import {CloseIcon} from "@/components/CloseIcon";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import rule1Pic1 from "../../public/assets/rule1pic1.png";
import {WhiteSquaresContainer} from "@/components/WhiteSquaresContainer";
import {GameResult, GameState, InputTab} from "@/utlities/models";
import {InputSection} from "@/components/InputSection";

interface RulesModalProps {
  onClickClose: () => void;
}

export const RulesModal = ({onClickClose}: RulesModalProps) => {
  return (
    <div className="h-screen w-full py-2 lg:py-6 text-white100 flex flex-col">
      <div className="flex justify-between w-full my-5 px-2">
        <h1 className="text-white100">Rules</h1>
        <CloseIcon onClick={onClickClose} color="#f8f8f8" size={28}/>
      </div>
      <div className="text-xs">
        <Carousel autoplay={false}>
          <RulesModalSlide index={1}>
            <p className="leading-6 text-left"><span className="font-display">?ERFECT</span> is a really simple game (and very
              similar to Hangman). You can enter characters one by one and see how many occurrences there are in
              the answer.</p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">
              <WhiteSquaresContainer matcherText="Manchester United" userSubmissionArray={["e"]}
                                     gameState={GameState.gameStarted} gameResult={GameResult.default}/>
              <InputSection inputTab={InputTab.oneByOne} userInput="e" userNuclearInput="" onClickTab={() => {
              }}/>
            </div>
            <p className="leading-6 text-left">You can keep going till you get the full name. If the character isn't in the name, it won't show up in the answer board.</p>
          </RulesModalSlide>
          <RulesModalSlide index={2}>
            <p className="leading-6 text-left">Or you can chance it in one go. Do you dare?</p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">
              <WhiteSquaresContainer matcherText="Arsenal" userSubmissionArray={["f", "r", "s", "e", "n", "l"]}
                                     gameState={GameState.gameOver} gameResult={GameResult.loss}/>
              <InputSection inputTab={InputTab.goForGlory} userInput="e" userNuclearInput={["f", "r", "s", "e", "n", "a", "l"]} onClickTab={() => {
              }}/>
            </div>
            <p className="leading-6 text-left">The downside? If you get it wrong, you lose. No re-dos!</p>
          </RulesModalSlide>
          <RulesModalSlide index={3}>
            <p className="leading-6 text-left">Numbers/Dashes/Ampersands are very much possible in a team name.</p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">
              <WhiteSquaresContainer matcherText="Vfl Bochum 1848" userSubmissionArray={['v', 'f', 'l', 'b', 'o', 'c', 'h', 'u', 'm', '1', '8', '4', '8']}
                                     gameState={GameState.gameOver} gameResult={GameResult.win}/>
              <InputSection inputTab={InputTab.goForGlory} userInput="e" userNuclearInput={['V', 'f', 'l', ' ', 'B', 'o', 'c', 'h', 'u', 'm', ' ', '1', '8', '4', '8']} onClickTab={() => {
              }}/>
            </div>
            <p className="leading-6 text-left">Other special characters, not really!</p>
          </RulesModalSlide>
          <RulesModalSlide index={4}>
            <p className="leading-6 text-left">In <span className="text-blue300 font-bold">One by One</span> mode if you submit a character, it is no longer available on the keyboard.</p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">
              <WhiteSquaresContainer matcherText="Vfl Bochum 1848" userSubmissionArray={['v', 'f', 'l', 'b', 'o', 'c', 'h', 'u', 'm', '1', '8', '4', '8']}
                                     gameState={GameState.gameOver} gameResult={GameResult.win}/>
              <InputSection inputTab={InputTab.goForGlory} userInput="e" userNuclearInput={['V', 'f', 'l', ' ', 'B', 'o', 'c', 'h', 'u', 'm', ' ', '1', '8', '4', '8']} onClickTab={() => {
              }}/>
            </div>
            <p className="leading-6 text-left">Other special characters, not really!</p>
          </RulesModalSlide>
          <RulesModalSlide index={5}>
            <p className="leading-6 text-left">All clues based on teams from the following leagues.</p>
            <div className="w-full flex flex-col items-center border-2 border-gray50 rounded-md p-2">
              <WhiteSquaresContainer matcherText="Vfl Bochum 1848" userSubmissionArray={['v', 'f', 'l', 'b', 'o', 'c', 'h', 'u', 'm', '1', '8', '4', '8']}
                                     gameState={GameState.gameOver} gameResult={GameResult.win}/>
              <InputSection inputTab={InputTab.goForGlory} userInput="e" userNuclearInput={['V', 'f', 'l', ' ', 'B', 'o', 'c', 'h', 'u', 'm', ' ', '1', '8', '4', '8']} onClickTab={() => {
              }}/>
            </div>
            <p className="leading-6 text-left">Other special characters, not really!</p>
          </RulesModalSlide>
        </Carousel>
      </div>
    </div>
  )
};
