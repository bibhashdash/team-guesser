import React from "react";

interface RulesModalSlideProps {
  index: number;
  children: React.ReactNode;
}


export const RulesModalSlide = ({index, children}:RulesModalSlideProps) => {
  return (
    <div className="text-white100 h-full w-full justify-self-center	flex flex-col items-center px-2 sm:px-12 gap-4 sm:gap-12 text-xs min-[350px]:text-lg md:text-xl">
      {children}
    </div>
  )
}
