import type {Meta, StoryObj} from '@storybook/react';
import {WordStorageBox} from "./WordStorageBox";
import {useEffect, useState} from "react";
import {GameResult, GameState, InputTab} from "../utlities/models";

interface Props {
  userInput: string;
  gameState: GameState;
  gameResult: GameResult;
}

const meta = {
  title: 'WordStorageBox',
  args: {
    userInput: 'Manchester',
    gameState: GameState.gameStarted,
    gameResult: GameResult.default,
  },
  argTypes: {
    gameState: {
      control: 'select',
      options: [GameState.gameStarted, GameState.gameOver],
    },
    gameResult: {
      control: 'select',
      options: [GameResult.default, GameResult.win, GameResult.loss],
    }
  },
  decorators: [(Story: any) => <div style={{
    backgroundColor: '#1F2937',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '1rem',
  }}>
    <p style={{color: 'white'}}>The answer is Manchester</p>
    <Story/>
  </div>],
} as Meta<Props>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {

  render: ({userInput, gameState, gameResult}: Props) => {
    const [userSubmissionArray, setUserSubmissionArray] = useState<string[]>([]);
    const [gameResultState, setGameResultState] = useState<GameResult>(GameResult.default);
    useEffect(() => {
      setUserSubmissionArray(userInput.toLowerCase().split(''));
    }, [userInput]);
    useEffect(() => {
      setGameResultState(gameResult);
    }, [gameResult]);
    return (
      <WordStorageBox userNuclearWord={''} inputTab={InputTab.oneByOne} gameResult={gameResult} squareSize={39} matcherWord={'Manchester'} userSubmissionArray={userSubmissionArray} gameState={gameState} />
    )
  }
}
