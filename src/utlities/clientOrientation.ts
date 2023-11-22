'use client';

import {useEffect, useState} from "react";
import {useMobileOrientation, isMobile } from 'react-device-detect'

export function useClientOrientation() {
  const [deviceOrientation, setDeviceOrientation] = useState<'landscape' | 'portrait'>('portrait');
  // const [landscape, setlandscape] = useState<boolean>(false);
  const {isLandscape} = useMobileOrientation();
  // setlandscape(isLandscape)

  useEffect(() => {
    if (isMobile && isLandscape) {
      setDeviceOrientation('landscape');
    }
    else {
      setDeviceOrientation('portrait');
    }
  }, [isLandscape, isMobile, deviceOrientation])

  return {
    deviceOrientation
  }
}
