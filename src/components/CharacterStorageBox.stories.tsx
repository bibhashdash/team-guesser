import type {Meta, StoryObj} from '@storybook/react';
import {CharacterStorageBox} from "./CharacterStorageBox";

const meta: Meta = {
  title: 'CharacterStorageBox',
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () =>
    <div style={{
      backgroundColor: '#1F2937',
      display: 'flex',
      width: '100%',
      padding: '1rem',
    }}>
      <CharacterStorageBox character={'h'} backgroundColor={'bg-green400'}/>
    </div>
}
