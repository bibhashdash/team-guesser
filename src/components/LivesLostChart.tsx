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
        display: true,
        text: 'How your Lives Bonus score stacks up against the rest',
        color: "#f8f8f8"
      },
    },
  };

  const barColors: Array<string> = new Array(7).fill('#4d4d4d');
  barColors.splice(findIndex, 1, 'red')

  const data: ChartData<'bar'> = {
    datasets: [
      {
        label: 'Lives Bonus',
        data: dataSet,
        backgroundColor: barColors,
        type: 'bar',
      }
    ],
    labels: labels,

  }
  return (
    <div className="h-[250px] w-full">
      <Bar data={data} options={options}/>
    </div>
  )
}
