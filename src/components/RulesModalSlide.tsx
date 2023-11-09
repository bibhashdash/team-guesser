import React from "react";

interface RulesModalSlideProps {
  index: number;
  children: React.ReactNode;
}


export const RulesModalSlide = ({index, children}:RulesModalSlideProps) => {
  return (
    <div className="text-white100 h-full w-full max-w-xl flex flex-col items-center p-2">
      {children}
    </div>
  )
}
