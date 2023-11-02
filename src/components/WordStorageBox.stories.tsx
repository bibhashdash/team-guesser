import type {Meta, StoryObj} from '@storybook/react';
import {WordStorageBox} from "./WordStorageBox";
import {useEffect, useState} from "react";
import {GameState} from "../utlities/models";

interface Props {
  userInput: string;
  gameState: GameState;
}

const meta = {
  title: 'WordStorageBox',
  args: {
    userInput: 'Manchester',
    gameState: GameState.gameStarted,
  },
  argTypes: {
    gameState: {
      control: 'select',
      options: [GameState.gameStarted, GameState.gameOver],
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

  render: ({userInput, gameState}: Props) => {
    const [userSubmissionArray, setUserSubmissionArray] = useState<string[]>([]);
    useEffect(() => {
      setUserSubmissionArray(userInput.toLowerCase().split(''));
    }, [userInput]);
    return (
      <WordStorageBox squareSize={39} matcherWord={'Manchester'} userSubmissionArray={userSubmissionArray} gameState={gameState} />
    )
  }
}
