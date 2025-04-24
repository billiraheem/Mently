// components/dashboard/UserStatsChart.tsx
import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Card from '../Resusables/Card';
import { UserStats } from '../../types';

ChartJS.register(ArcElement, Tooltip, Legend);

interface UserStatsChartProps {
  stats: UserStats;
  className?: string;
}

const UserStatsChart: React.FC<UserStatsChartProps> = ({ stats, className = '' }) => {
  const data = {
    labels: ['Students', 'Mentors', 'Programs', 'Others'],
    datasets: [
      {
        data: [stats.programs, stats.students, stats.others, stats.mentors],
        backgroundColor: [
          'rgba(249, 155, 171, 1)',
          'rgba(98, 178, 253, 1)',
          'rgba(255, 180, 79, 1)',
          'rgba(155, 223, 196, 1)',
        ],
        borderColor: [
          'rgba(249, 155, 171, 1)',
          'rgba(98, 178, 253, 1)',
          'rgba(255, 180, 79, 1)',
          'rgba(155, 223, 196, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className={`bg-gray-50 p-2 shadow-md rounded-md h-70 ${className}`}>
      <div className="flex items-center justify-between border-b px-2 pt-2 pb-4 border-gray-300 mb-4">
        <h2 className="text-md text-gray-400 font-extrabold">Users</h2>
        <div className="relative">
          <select className="appearance-none border border-gray-300 rounded-md py-1 pl-3 pr-8 bg-white-400 focus:outline-none focus:ring-2 focus:ring-purple-800 text-sm">
            <option value="all">All</option>
            <option value="students">Students</option>
            <option value="mentors">Mentors</option>
            <option value="programs">Programs</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <Card className="p-4 bg-white-400">
        <div className="flex items-center justify-between">
          <div className="relative w-40 h-40 mb-4">
            {/* <Pie data={data} options={options} /> */}
            <Doughnut data={data} options={options} className='' />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">{stats.total}</span>
              <span className="text-sm text-gray-500">Users</span>
            </div>
          </div>

          <div className="w-full block px-2 space-y-3">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-400 border border-blue-400 mr-2"></span>
              <span className="text-sm mr-2">Students</span>
              <span className="ml-auto text-sm font-medium">{stats.students}</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-teal-200 border border-teal-200 mr-2"></span>
              <span className="text-sm">Mentors</span>
              <span className="ml-auto text-sm font-medium">{stats.mentors}</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-red-300 border border-red-300 mr-2"></span>
              <span className="text-sm">Programs</span>
              <span className="ml-auto text-sm font-medium">{stats.programs}</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-400 mr-2"></span>
              <span className="text-sm">Others</span>
              <span className="ml-auto text-sm font-medium">{stats.others}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserStatsChart;