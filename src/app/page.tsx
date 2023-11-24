'use client';

import {useClientDimensions} from "@/utlities/clientDimensions";
import React, {useEffect, useState} from "react";
import {SplashScreen} from "@/components/SplashScreen";
import {useRouter} from "next/navigation";
import {RulesModal} from "@/components/RulesModal";
import {LandscapeHandler} from "@/components/LandscapeHandler";
import {useClientOrientation} from "@/utlities/clientOrientation";

export default function Home() {


  useClientDimensions();
  const [showRulesModal, setShowRulesModal] = useState<boolean>(false);
  const [showLandscapeModal, setShowLandscapeModal] = useState<boolean>(false);
  const {deviceOrientation} = useClientOrientation();

  useEffect(() => {
    deviceOrientation === 'landscape' ? setShowLandscapeModal(true) : setShowLandscapeModal(false);
  }, [deviceOrientation])

  const router = useRouter();
  return (
    <>

      <div className="fixed w-full h-screen top-0 left-0 bg-black300 flex flex-col gap-6 justify-center items-center">

        <SplashScreen />
        <div className="w-full game-over-message-fade-in">
          <h1 className="text-white100 text-center">Think you know your football team names?</h1>
        </div>
        <div className="flex gap-4 game-over-message-fade-in">
          <button
            onClick={() => setShowRulesModal(true)}
            className="px-4 py-2 bg-black300 border-2 border-blue500 text-blue500 rounded">
            View Rules
          </button>
          <button
            onClick={() => router.push('/game')}
            className="px-4 py-2 bg-blue500 text-white100 rounded">
            Play Game
          </button>
        </div>
      </div>
      {
        showRulesModal && (
          <div className="w-full max-w-6xl absolute w-full h-screen top-0 bg-black300">
            <RulesModal onClickClose={() => setShowRulesModal(false)} />
          </div>
        )
      }
      {
        showLandscapeModal && (
          <div className="w-full max-w-3xl absolute w-full h-screen top-0 bg-black300">
            <LandscapeHandler />
          </div>
        )
      }
    </>
  )
}
