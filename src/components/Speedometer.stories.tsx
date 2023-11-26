import type {Meta, StoryObj} from '@storybook/react';
import {Speedometer, SpeedometerProps} from "../components/Speedometer";

const meta = {
  title: 'Speedometer',
  args: {
    speed: 45,
    maxSpeed: 56
  },
  decorators: [(Story: any) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '1rem',
  }}>
    <Story/>
  </div>],
} as Meta<SpeedometerProps>;


export default meta;

export const Default = {
  render: ({maxSpeed, speed}:SpeedometerProps) => {
    return (
      <Speedometer speed={speed} maxSpeed={maxSpeed} />
    )
  }
}
