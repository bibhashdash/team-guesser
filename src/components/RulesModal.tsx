import {Carousel} from "react-responsive-carousel";
import {RulesModalSlide} from "@/components/RulesModalSlide";
import {CloseIcon} from "@/components/CloseIcon";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import rule1Pic1 from "../../public/assets/rule1pic1.png";
import {WhiteSquaresContainer} from "@/components/WhiteSquaresContainer";
import {GameResult, GameState} from "@/utlities/models";

interface RulesModalProps {
  onClickClose: () => void;
}

export const RulesModal = ({onClickClose}:RulesModalProps) => {
   return (
     <div className="h-full w-full py-2 lg:py-6 text-white100">
       <div className="flex justify-between w-full my-5 px-2">
         <h1 className="text-white100">Rules</h1>
         <CloseIcon onClick={onClickClose} color="#f8f8f8" size={28} />
       </div>
       <div className="text-xs">
         <Carousel autoplay={false}>
           <RulesModalSlide index={1}>
             <p className="leading-6"><span className="font-display">?ERFECT</span> is a really simple game (and very similar to Hangman). You can either enter characters one by one and see how many occurrences there are in the answer</p>
            <div>
              <WhiteSquaresContainer matcherText="Manchester United" userSubmissionArray={["e"]} gameState={GameState.gameStarted} gameResult={GameResult.default} />

            </div>
           </RulesModalSlide>
           <RulesModalSlide index={1}>
             <p className="leading-6"><span className="font-display">?ERFECT</span> is a really simple game (and very similar to Hangman). You can either enter characters one by one and see how many occurrences there are in the answer</p>
             <Image src={rule1Pic1} />
           </RulesModalSlide>
           <RulesModalSlide index={1}>
             <p className="leading-6"><span className="font-display">?ERFECT</span> is a really simple game (and very similar to Hangman). You can either enter characters one by one and see how many occurrences there are in the answer</p>
             <Image src={rule1Pic1} />
           </RulesModalSlide>
         </Carousel>
       </div>
     </div>
   )
};
