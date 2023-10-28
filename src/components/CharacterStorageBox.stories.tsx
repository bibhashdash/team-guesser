import type {Meta, StoryObj} from '@storybook/react';
import {CharacterStorageBox} from "../components/CharacterStorageBox";

const meta: Meta = {
  title: 'CharacterStorageBox',
  component: CharacterStorageBox,
} as Meta<typeof CharacterStorageBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () =>
    <div style={{
      backgroundColor: '#1F2937',
      display: 'flex',
      width: '100%',
    }}>
      <CharacterStorageBox character={'h'}/>
    </div>
}
