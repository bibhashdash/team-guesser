import type {Meta, StoryObj} from '@storybook/react';
import {WhiteSquaresContainer} from "./WhiteSquaresContainer";
import {useEffect, useState} from "react";
import {GameResult, GameState} from "../utlities/models";

interface Props {
  userInput: string;
  gameState: GameState;
  matcherWord: string;
}
const meta = {
  title: 'WhiteSquaresContainer',
  args: {
    userInput: 'Manchester United',
    gameState: GameState.gameStarted,
    matcherWord: 'Manchester United',
  },
  argTypes: {
    gameState: {
      control: 'select',
      options: [GameState.gameStarted, GameState.gameOver],
    }
  },
  decorators: [(Story) => (
    <div style={{
      backgroundColor: '#1F2937',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: '1rem',
    }}>
      <Story/>
    </div>
  )],
} as Meta<Props>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  render: ({userInput, gameState, matcherWord}: Props) => {
    const [userSubmissionArray, setUserSubmissionArray] = useState<Array<string>>([]);
    useEffect(() => {
      setUserSubmissionArray(userInput.toLowerCase().split(''));
    }, [userInput]);
    return (
      <WhiteSquaresContainer gameResult={GameResult.default} matcherText={matcherWord} userSubmissionArray={userSubmissionArray} gameState={gameState} />
    )
  }
}
