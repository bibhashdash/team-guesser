import type {Meta, StoryObj} from '@storybook/react';
import {CharacterStorageBox} from "./CharacterStorageBox";

interface CharacterStorageBoxProps {
  character: string;
  validInput: 'valid' | 'invalid' | 'none';
}

const meta = {
  title: 'CharacterStorageBox',
  args: {
    character: 'h',
    validInput: 'valid',
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
} as Meta<CharacterStorageBoxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  render: ({validInput, character}:CharacterStorageBoxProps) => {
    let background = 'bg-white100';
    if (validInput === 'invalid') {
      background = 'bg-red500';
    } else if (validInput === 'valid') {
      background = 'bg-green400';
    } else background = 'bg-white100';
    return (
      <div style={{
        backgroundColor: '#1F2937',
        display: 'flex',
        width: '100%',
        padding: '1rem',
      }}>
        <CharacterStorageBox character={character} backgroundColor={background}/>
      </div>
    )
  }

}
