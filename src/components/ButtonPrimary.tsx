import React from "react";

interface ButtonPrimaryProps {
  buttonContent: string,
  onClickButton: () => void,
}

export const ButtonPrimary = ({buttonContent, onClickButton}:ButtonPrimaryProps) => {
  return (
    <button
      onClick={onClickButton}
      className="px-4 py-2 bg-blue500 text-white100 rounded">
      {buttonContent}
    </button>
  )
}
