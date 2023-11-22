'use client';

import {useEffect, useState} from "react";
import {isMobile} from 'react-device-detect'

export function useClientOrientation() {
  const [deviceOrientation, setDeviceOrientation] = useState<'landscape' | 'portrait'>('portrait');

  const updateOrientaton = () => {
    if (isMobile && window.innerWidth > window.innerHeight) {
      setDeviceOrientation('landscape');
    }
    else {
      setDeviceOrientation('portrait');
    }
  }

  useEffect(() => {
    window.addEventListener('load', updateOrientaton);
    window.addEventListener('resize', updateOrientaton);

    return () => {
      window.removeEventListener('resize', updateOrientaton);
      window.removeEventListener('load', updateOrientaton);
    };
  }, [isMobile])

  return {
    deviceOrientation
  }
}
