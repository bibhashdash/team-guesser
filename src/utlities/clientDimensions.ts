import {useEffect} from "react";

export function useClientDimensions() {
  useEffect(() => {
    const body = document.body;

    const updateDimensions = () => {
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;

      body.style.setProperty('--vw', `${ width }px`);
      body.style.setProperty('--vh', `${ height }px`);
    }

    if (document.readyState === 'complete') {
      updateDimensions();
    }

    window.addEventListener('resize', updateDimensions);
    window.addEventListener('load', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('load', updateDimensions);
    };
  });
}
