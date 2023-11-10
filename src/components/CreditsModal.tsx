import {CloseIcon} from "@/components/CloseIcon";
import React from "react";

interface CreditsModalProps {
  onClickClose: () => void;
}

export const CreditsModal = ({onClickClose}:CreditsModalProps) => {
   return (
     <div className="h-screen w-full py-2 lg:py-6 text-white100 flex flex-col">
       <div className="flex justify-between w-full my-5 px-2">
         <h1 className="text-white100">Credits</h1>
         <CloseIcon onClick={onClickClose} color="#f8f8f8" size={28}/>
       </div>
     </div>
   )
}
