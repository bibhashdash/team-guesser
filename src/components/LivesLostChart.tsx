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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface LivesLostChartProps {
  livesLost: number,
  dataSet: Array<number>,
}

export const LivesLostChart = ({livesLost, dataSet}:LivesLostChartProps) => {

  const labels = [1, 2, 3, 4, 5, 6, 7];

  const findIndex = labels.indexOf(livesLost);

  const options: ChartOptions<any> = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
        grid: {
          display: false,
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

  const barColors: Array<string> = new Array(7).fill('#cbcbcb');
  barColors.splice(findIndex, 1, '#ec0202')

  const data: ChartData<'bar'> = {
    datasets: [
      {
        label: 'Number of Scores',
        data: dataSet,
        backgroundColor: barColors,
        type: 'bar',
      }
    ],
    labels: labels,

  }
  return (
    <div className="h-full w-full flex flex-col gap-2">
      <p className="text-white100 text-sm">
        How <span className="text-red500 font-bold">your</span> lives bonus stacks up
        against the <span className="text-white50 font-bold">rest</span> <span className="text-xxs sm:text-xs">(hover or tap on bars to find out more)</span>
      </p>
      <Bar data={data} options={options}/>
    </div>
  )
}
