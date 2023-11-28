import {buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, {useEffect, useState} from "react";

export interface SpeedometerProps {
  speed: number,
  maxSpeed: number,
}

// interface Props {
//   value: number
//   maxValue: number
// }
import dynamic from 'next/dynamic'

export const Speedometer = ({maxSpeed, speed}: SpeedometerProps) => {
  const ReactSpeedometer: React.ComponentType<Props> = dynamic(import('react-d3-speedometer'), { ssr: false })

  return (
    <div className="h-[300px] w-[150px] game-over-message-fade-in">
      <ReactSpeedometer value={speed} maxValue={maxSpeed} />
    </div>
  )
}
