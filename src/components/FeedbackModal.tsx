import {CloseIcon} from "@/components/CloseIcon";
import React, {useState} from "react";
import Rating from '@mui/material/Rating';
import Lottie from "lottie-react";
import crowdCheerAnimation from '../lottie/crowdCheer.json'

export interface FeedbackModalProps {
  onClickClose: () => void;
  onClickFormSubmit: (stars: number, message: string) => void,
}

export const FeedbackModal = ({onClickClose, onClickFormSubmit}: FeedbackModalProps) => {
  const [value, setValue] = React.useState<number | null>(4);
  const [message, setMessage] = useState<string>("");
  const [showFeedbackInputSection, setShowFeedbackInputSection] = useState<boolean>(true);
  const [showThanksMessage, setShowThanksMessage] = useState<boolean>(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    value && onClickFormSubmit(value, message);
    setShowFeedbackInputSection(false);
    setShowThanksMessage(true);
  }
  return (
    <div
      className="absolute w-full top-0 left-0 backdrop-blur h-full bg-backdropFilter flex justify-center items-center py-2 px-4 sm:px-4 md:py-20 z-50">
      <div
        className="w-full max-w-[400px] h-fit bg-black300 flex flex-col gap-6 justify-between py-2 px-2 sm:px-4 rounded-md">
        <div className="flex justify-between w-full my-2 px-2">
          <h1 className="text-white100 font-display">Feedback</h1>
          <CloseIcon onClick={onClickClose} color="#f8f8f8" size={28}/>
        </div>

        <div className="text-white100 w-full flex flex-col gap-4">
          {
            showFeedbackInputSection && (
                <p className="text-sm">We hope you’re enjoying playing our game. We’d love to hear your thoughts on how we can improve it.
                  Could you please take a moment to share your feedback with us? Your input will help us make the game
                  even better for you and other players. Thank you for your time and support!</p>
            )
          }
          {
            showFeedbackInputSection && (
              <div className="w-full flex flex-col justify-center items-center">
                <Rating
                  name="simple-controlled"
                  value={value}
                  size="large"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>
            )
          }
          {
            showFeedbackInputSection && (
              <form className="w-full flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
                <textarea placeholder="Type message here..." name="feedback-message" rows="5"
                          className="w-full rounded p-2 text-black300"
                          onChange={(event) => setMessage(event.currentTarget.value)}/>
                <div className="grid grid-cols-12 gap-2 sm:gap-8">
                  <button
                    onClick={onClickClose}
                    className="px-4 py-2 bg-black300 border-2 border-blue500 text-blue500 rounded focus:animate-button-pressed col-span-6">
                    New Game!
                  </button>
                  <button
                    className="px-4 py-2 bg-blue500 text-white100 rounded focus:animate-button-pressed col-span-6">
                    Submit
                  </button>
                </div>
              </form>
            )
          }
          {
            showThanksMessage && (
              <div className="flex flex-col items-center gap-6">
                <p>You're a star!</p>
                <Lottie style={{height: '75px', width: '100px'}} animationData={crowdCheerAnimation}/>
                <button
                  onClick={onClickClose}
                  className="px-4 py-2 bg-blue500 text-white100 rounded focus:animate-button-pressed">
                  Back to Game
                </button>
              </div>
            )
          }
        </div>

      </div>
    </div>
  )
}
