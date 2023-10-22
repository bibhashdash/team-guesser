'use client';

import {useEffect, useState} from "react";


export default function Home() {
  const wordDemo = "Derby";
  const wordDemoLength = wordDemo.length;
  const whiteBoxArray = new Array(wordDemoLength).fill(<></>);

  const [guessedWordArray, setGuessedWordArray] = useState<string[]>([]);
  useEffect(() => {console.log(guessedWordArray)}, [guessedWordArray]);
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log(guessedWordArray.join(''));
    }
    if (e.key === 'Backspace') {
      setGuessedWordArray(prevState => prevState.slice(0, prevState.length - 1));
      return;
    }
    if (e.key === 'Alt' || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta' || e.key === 'Tab') {
      return;
    }
    const regex = /^[A-Za-z0-9]*$/;
    if (regex.test(e.key) || e.code === 'Space') {
      setGuessedWordArray(prevState => {
        if (prevState.length === wordDemoLength) {
          return prevState;
        }
        return [...prevState, e.key];
      });
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Team Guesser</h1>
      <h2>Like Wordle, but for football teams!</h2>
      <div className="border-2 border-black h-96 w-full max-w-lg rounded-md p-2">
       <div className="w-full grid grid-cols-5 gap-2">
         {
            whiteBoxArray.map((box, index) => (
              <div className="bg-white h-16 text-5xl text-center">{guessedWordArray[index]}</div>
            ))
         }
       </div>
      </div>
    </main>
  )
}
