import type {Meta, StoryObj} from '@storybook/react';
import {WordStorageBox} from "./WordStorageBox";
import {JSX, useEffect, useState} from "react";
import {GameState} from "../utlities/models";

interface Props {
  userInput: string;
  gameState: GameState;
}

const meta: Meta = {
  title: 'WordStorageBox',
  argTypes: {
    userInput: {
      control: 'text',
    },
    gameState: {
      options: [GameState.gameStarted, GameState.gameOver],
      control: {
        type: 'select'
      },
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

export const Default: { render: ({userInput, gameState}: Props) => JSX.Element } = {

  render: ({userInput, gameState}: Props) => {
    const [userSubmissionArray, setUserSubmissionArray] = useState<string[]>([]);
    useEffect(() => {
      setUserSubmissionArray(userInput.toLowerCase().split(''));
    }, [userInput]);
    return (
      <WordStorageBox matcherWord={'Manchester'} userSubmissionArray={userSubmissionArray} gameState={gameState} />
    )
  }
}
