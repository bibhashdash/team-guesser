import type {Meta, StoryObj} from '@storybook/react';
import {CharacterStorageBox} from "./CharacterStorageBox";

interface Props {
  character: string;
  validInput: 'valid' | 'invalid' | 'none';
}

const meta: Meta = {
  title: 'CharacterStorageBox',
  argTypes: {
    character: {
      control: 'text',
      defaultValue: 'h',
    },
    validInput: {
      control: 'select',
      options: ['valid', 'invalid', 'none'],
      defaultValue: 'valid',
    }
  }
} as Meta<Props>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: { render: ({validInput, character}: Props) => JSX.Element } = {
  render: ({validInput, character}:Props) => {
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
