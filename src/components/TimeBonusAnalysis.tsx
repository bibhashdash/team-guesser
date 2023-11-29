import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import React from "react";
import {TimerIcon} from "@/icons/TimerIcon";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
interface TimeBonusAnalysisProps {
  userBonus: number,
  bestBonus: number,
}

export const TimeBonusAnalysis = ({userBonus, bestBonus}: TimeBonusAnalysisProps) => {
  const labelsAndDataset = [userBonus, bestBonus];
  const barColors: Array<string> = new Array(2).fill('#cbcbcb');
  barColors.splice(0, 1, '#0079cb')
  const options: ChartOptions<any> = {
    indexAxis: 'y' as const,
    responsive: true,
    barThickness: 35,
    scales: {
      x: {
        grid: {
          display: false,
        },
       ticks: {
          display: false,
       }
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 36,
            weight: "bolder",
          },
          color: barColors
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'How your Lives Bonus score stacks up against the rest',
        color: "#f8f8f8"
      },
    },
  };

  const data: ChartData<'bar'> = {
    datasets: [
      {
        label: 'Time Bonus',
        data: labelsAndDataset,
        backgroundColor: barColors,
        type: 'bar',
      }
    ],
    labels: labelsAndDataset,

  }

  return (
    <div className="w-full h-[200px] flex flex-col gap-2 font-display">
      <p className="text-white100 text-sm flex gap-2 justify-center">
        <TimerIcon color="rgba(176,176,176,0.96)" size={20} />
        <span className="text-blue500 font-bold font-display">YOU</span> v <span className="font-display text-white50 font-bold">The Best</span>
      </p>
      <Bar data={data} options={options}/>
    </div>
  )
}
