import {CloseIcon} from "@/components/CloseIcon";
import React, {useState} from "react";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {FeedbackData} from "@/utlities/models";

export interface FeedbackModalProps {
  onClickClose: () => void;
  onClickFormSubmit: (stars: number, message: string) => void,
}

export const FeedbackModal = ({onClickClose, onClickFormSubmit}:FeedbackModalProps) => {
  const [value, setValue] = React.useState<number | null>(4);
  const [message, setMessage] = useState<string>("Type message here...");
  const handleSubmit = (e) => {
    e.preventDefault();
    value && onClickFormSubmit(value, message);
  }
  return (
    <div className="absolute w-full top-0 left-0 backdrop-blur h-full bg-backdropFilter flex justify-center items-center py-2 px-4 sm:px-4 md:py-20 z-50">
      <div className="w-full max-w-[400px] h-fit bg-black300 flex flex-col gap-6 justify-between py-2 px-2 sm:px-4 rounded-md">
        <div className="flex justify-between w-full my-2 px-2">
          <h1 className="text-white100">Hey there!</h1>
          <CloseIcon onClick={onClickClose} color="#f8f8f8" size={28}/>
        </div>

        <div className="text-white100 w-full flex flex-col gap-4">
          <p>Thanks for playing the game. We hope you're enjoying it!</p>
          <p>If you've got a quick minute, I'd love to know what you think. Feel free to give us a rating and even send me a message with feedback.</p>
          <p>This is totally optional! But every bit of knowledge goes a long way.</p>
          <div className="w-full flex flex-col justify-center items-center">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <form className="w-full flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
            <textarea name="feedback-message" rows="5" className="w-full rounded p-2 text-black300" value={message} onChange={(event) => setMessage(event.currentTarget.value)} />
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
        </div>

      </div>
    </div>
  )
}
