import {CloseIcon} from "@/components/CloseIcon";
import React from "react";

interface CreditsModalProps {
  onClickClose: () => void;
}

export const CreditsModal = ({onClickClose}: CreditsModalProps) => {
  return (
    <div className="h-screen w-full py-2 lg:py-6 text-white100 flex flex-col">
      <div className="flex justify-between w-full my-5 px-2">
        <h1 className="text-white100">Credits</h1>
        <CloseIcon onClick={onClickClose} color="#f8f8f8" size={28}/>
      </div>
      <div className="text-center px-2 md:px-8 flex flex-col gap-4 md:gap-10">
        <p className="text-xs sm:text-lg text-left leading-4">
          As the game developer, I'd like to thank the following folks for their time, advice, guidance, and (most
          importantly!) feedback.
        </p>
        <div className="w-full flex justify-center text-xl">
          <ul className="list-disc text-left">
            <li>Kirstie Dash</li>
            <li>Arjun Dash</li>
            <li>Nathaniel Dash</li>
            <li>Shishir Dash</li>
            <li>Gary Rose</li>
            <li>Paul Jervis</li>
            <li>Julius Yam</li>
            <li>Craig Pickles</li>
            <li>Andy Gibson</li>
            <li>Felix Wentworth</li>
          </ul>
        </div>
        <p className="text-xs sm:text-lg text-left leading-4">
          If you'd like to make any suggestions or provide any feedback, I'd love to hear from you! Please feel free to
          connect with me on <a className="text-blue500"
                                href="https://www.linkedin.com/in/bibhash-dash-57307921/" target="_blank">LinkedIn</a>.
        </p>
      </div>
    </div>
  )
}
