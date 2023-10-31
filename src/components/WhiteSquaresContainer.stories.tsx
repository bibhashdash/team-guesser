import type {Meta, StoryObj} from '@storybook/react';
import {WhiteSquaresContainer} from "./WhiteSquaresContainer";
import {JSX, useEffect, useState} from "react";
import {useArgs} from "@storybook/preview-api";
import {GameState} from "@/utlities/models";

interface Props {
  userInput: string;
}
const meta: Meta = {
  title: 'WhiteSquaresContainer',
  args: {
    userInput: 'Manchester United',
  },
  decorators: [(Story) => (
    <div style={{
      backgroundColor: '#1F2937',
      height: '200px',
      display: 'flex',
      width: '100%',
      padding: '1rem',
    }}>
      <Story/>
    </div>
  )],
} as Meta<Props>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: { render: ({userInput}: Props) => JSX.Element } = {
  render: ({userInput}: Props) => {
    const [userSubmissionArray, setUserSubmissionArray] = useState<Array<string>>([]);
    useEffect(() => {
      setUserSubmissionArray(userInput.toLowerCase().split(''));
    }, [userInput]);
    return (
      <WhiteSquaresContainer matcherText={'Manchester United'} userSubmissionArray={userSubmissionArray} />
    )
  }
}
