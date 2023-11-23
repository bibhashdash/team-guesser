'use client';

import {useEffect, useState} from "react";
import {isMobile} from 'react-device-detect'

export function useClientOrientation() {
  const [deviceOrientation, setDeviceOrientation] = useState<'landscape' | 'portrait'>('portrait');

  useEffect(() => {

    const updateOrientaton = () => {
      if (isMobile && window.innerWidth > window.innerHeight) {
        setDeviceOrientation('landscape');
      }
      else {
        setDeviceOrientation('portrait');
      }
    }
    if (document.readyState === 'complete') {
      updateOrientaton();
    }
    window.addEventListener('load', updateOrientaton);
    window.addEventListener('resize', updateOrientaton);

    return () => {
      window.removeEventListener('resize', updateOrientaton);
      window.removeEventListener('load', updateOrientaton);
    };
  })

  return {
    deviceOrientation
  }
}
