import type {Meta, StoryObj} from '@storybook/react';
import {WordStorageBox} from "./WordStorageBox";

const meta: Meta = {
  title: 'WordStorageBox',
  decorators: [(Story: any) => <div style={{
    backgroundColor: '#1F2937',
    height: '200px',
    display: 'flex',
    width: '100%',
    padding: '1rem',
  }}><Story/></div>],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <WordStorageBox matcherWord={'Manchester'} userSubmissionArray={['m', 'e', 's', 'x', 'y']} />
}
