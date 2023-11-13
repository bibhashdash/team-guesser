import {InputTab} from "@/utlities/models";
import React from "react";

interface InputSectionProps {
  inputTab: InputTab;
  userInput: string;
  tempNuclearInput: string;
  onClickTab: (tab: InputTab) => void;
}

export const InputSection = ({userInput, inputTab, onClickTab ,tempNuclearInput}: InputSectionProps) => {
  return (
    <div id="tabbed-view-for-inputs" className="flex flex-col items-center w-full gap-2 md:gap-6 py-1">
      <div id="tabbed-navbar" className="flex w-full max-w-3xl justify-evenly">
        <div onClick={() => onClickTab(InputTab.oneByOne)}
             className={`cursor-pointer border-gray50 w-full py-2 text-center ${inputTab === InputTab.oneByOne ? 'shadow-xl border-b-4 border-b-blue500 text-blue500 font-semibold' : 'text-white50'}`}>
          One by One
        </div>
        <div onClick={() => onClickTab(InputTab.goForGlory)}
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
                {tempNuclearInput}
              </div>
            </div>
          )
      }

    </div>
  )
}
