import {buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, {useEffect, useState} from "react";
import ReactSpeedometer from "react-d3-speedometer"

export interface SpeedometerProps {
  speed: number,
  maxSpeed: number,
}

export const Speedometer = ({maxSpeed, speed}: SpeedometerProps) => {
  return (
    <div className="h-[300px] w-[150px]">
      <ReactSpeedometer value={speed} maxValue={maxSpeed} />
    </div>
  )
}
