import type { Meta, StoryObj } from '@storybook/react';
import {WordStorageBox} from "../components/WordStorageBox";

const meta: Meta = {
  title: 'WordStorageBox',
  component: WordStorageBox,
  decorators: [(Story: any) => <div style={{
    backgroundColor: '#1F2937',
    height: '200px',
    display: 'flex',
    width: '100%',
  }}><Story/></div>],
} as Meta<typeof WordStorageBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <WordStorageBox matcherWord={'hello'} length={5} textSingleCharacter={'e'} />
}
