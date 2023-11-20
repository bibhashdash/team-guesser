import type {Meta, StoryObj} from '@storybook/react';
import {ScoreModal} from "../components/ScoreModal";

const meta = {
  title: 'ScoreModal',
  decorators: [(Story: any) => <div style={{
    backgroundColor: '#1F2937',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '1rem',
  }}>
    <Story/>
  </div>],
} as Meta;

export default meta;

export const Default = {
  render:() => {
    return (
      <ScoreModal gloryBonus={20} onClickClose={() => {}} score={20} elapsedSeconds={34} wrongGuessCount={3} />
    )
  }
}
