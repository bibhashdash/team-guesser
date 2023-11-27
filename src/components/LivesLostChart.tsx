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
import {FootballIcon} from "@/icons/FootballIcon";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export const LivesLostChart = ({livesLost}: {livesLost: number}) => {
  // const livesLostTest = 4
  const labels = [0, 1, 2, 3, 4, 5, 6];
  const dataSet =  [0, 2, 6, 10, 15, 4, 12]  ;

  const findIndex = labels.indexOf(livesLost);
  console.log(dataSet[findIndex]);

  const options: ChartOptions<any> = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: false,
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const barColors: Array<string> = new Array(7).fill('#4d4d4d');
  barColors.splice(findIndex, 1, 'red')

  const data: ChartData<'bar'> = {
    datasets: [
      {
        label: 'chances',
        data: dataSet,
        backgroundColor: barColors,
        type: 'bar',
      }
    ],
    labels: labels,

  }
  return (
    <Bar data={data} options={options}/>
  )
}
